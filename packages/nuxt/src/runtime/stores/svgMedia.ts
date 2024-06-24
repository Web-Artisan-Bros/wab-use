import { defineStore } from 'pinia'
import { uuid } from '@wab-use/libs'
import { computed, ref } from 'vue'
import { DOMParser } from '../xmldom/lib/index'

export type SvgMediaType = {
    html?: string,
    props?: any,
    id: string,
    error?: any
}

export const useSvgMedia = defineStore('wabSvgMedia', () => {
  const icons = ref<Record<string, SvgMediaType>>({})
  
  const add = (url: string, svg: any = {}) => {
    icons.value[url] = svg
    
    fetchSvg(url).then(resp => {
      icons.value[url] = {
        ...svg,
        ...resp
      }
    })
  }
  
  const load = (url: string, data: any) => {
    if (has(url)) return
    
    add(url, { ...data, id: uuid() })
  }
  
  const has = (url: string) => {
    return Object.keys(icons.value).includes(url)
  }
  
  const get = (url: string) => {
    return icons.value[url]
  }
  
  const parseHtml = async (html: string) => {
    const parser = new DOMParser()
    const xmlDoc = parser.parseFromString(html, 'text/xml').getElementsByTagName('svg')[0]
    
    return {
      props: Array.from(xmlDoc.attributes).reduce((acc, el) => {
        acc[el.name] = el.value
        return acc
      }, {} as any),
      content: xmlDoc.toString()
    }
  }
  
  const fetchSvg = async (url?: string) => {
    if (!url) return

    try {
      const resp: Blob = await $fetch(url, {
        responseType: 'blob'
      })
      
      const rawHtml = await resp.text()
      const svgEl = await parseHtml(rawHtml)
      
      return {
        html: svgEl.content,
        props: svgEl.props ?? {}
      }
    } catch (e) {
      console.error(e)
      
      return {
        html: null,
        props: null,
        error: e
      }
    }
  }
  
  // Function that will search recursively for svg icons in the page data
  const searchForSvg = (parent: any) => {
    let toReturn = [] as any
    
    if (Array.isArray(parent)) {
      parent.forEach((item) => {
        const data = searchForSvg(item)
        
        if (Object.keys(data).length > 0) {
          toReturn.push(data)
        }
      })
      
      return toReturn
    }
    
    Object.entries(parent).forEach(([key, value]) => {
      console.log(key)
      if (parent.mime === 'image/svg+xml') {
        // Here we can call the store method to load the svg icon
        load(parent.url, parent)
        
        toReturn = parent
        
        return
      }
      
      if (value && typeof value === 'object') {
        const data = searchForSvg(value)
        
        if (Object.keys(data).length > 0) {
          toReturn = data
        }
      }
    })
    
    return toReturn
  }
  
  return {
    icons,
    add,
    has,
    get,
    load,
    searchForSvg,
    fetchSvg,
    iconsList: computed(() => Object.values(icons.value))
  }
})
