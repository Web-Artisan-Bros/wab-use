import { defineStore } from "pinia";
import { uuid } from "@wab-use/libs";
import { computed, ref } from "vue";
import { DOMParser } from "../xmldom/lib/index.mjs";
export const useSvgMedia = defineStore("wabSvgMedia", () => {
  const icons = ref({});
  const add = (url, svg = {}) => {
    icons.value[url] = svg;
    fetchSvg(url).then((resp) => {
      icons.value[url] = {
        ...svg,
        ...resp
      };
    });
  };
  const load = (url, data) => {
    if (has(url))
      return;
    add(url, { ...data, id: uuid() });
  };
  const has = (url) => {
    return Object.keys(icons.value).includes(url);
  };
  const get = (url) => {
    return icons.value[url];
  };
  const parseHtml = async (html) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(html, "text/xml").getElementsByTagName("svg")[0];
    return {
      props: Array.from(xmlDoc.attributes).reduce((acc, el) => {
        acc[el.name] = el.value;
        return acc;
      }, {}),
      content: xmlDoc.toString()
    };
  };
  const fetchSvg = async (url) => {
    if (!url)
      return;
    try {
      const resp = await $fetch(url, {
        responseType: "blob"
      });
      const rawHtml = await resp.text();
      const svgEl = await parseHtml(rawHtml);
      return {
        html: svgEl.content,
        props: svgEl.props ?? {}
      };
    } catch (e) {
      console.error(e);
      return {
        html: null,
        props: null,
        error: e
      };
    }
  };
  const searchForSvg = (parent) => {
    let toReturn = [];
    if (Array.isArray(parent)) {
      parent.forEach((item) => {
        const data = searchForSvg(item);
        if (Object.keys(data).length > 0) {
          toReturn.push(data);
        }
      });
      return toReturn;
    }
    Object.entries(parent).forEach(([key, value]) => {
      console.log(key);
      if (parent.mime === "image/svg+xml") {
        load(parent.url, parent);
        toReturn = parent;
        return;
      }
      if (value && typeof value === "object") {
        const data = searchForSvg(value);
        if (Object.keys(data).length > 0) {
          toReturn = data;
        }
      }
    });
    return toReturn;
  };
  return {
    icons,
    add,
    has,
    get,
    load,
    searchForSvg,
    fetchSvg,
    iconsList: computed(() => Object.values(icons.value))
  };
});
