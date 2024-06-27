import { inView } from 'framer-motion/dom'
import { computed, isRef, ref, watch } from 'vue'

interface Options {
  once?: boolean
  amount?: number
  onInView?: (el: HTMLElement) => void
  onOutView?: (el: HTMLElement) => void
}

export function useInView (el: any, options?: Options | undefined) {
  const ranOnce = ref(false)
  
  watch(() => el, (el) => {
    if (!el || (isRef(el) && !el.value)) return
    
    inView(isRef(el) ? el.value : el, ({ target }) => {
      if (ranOnce.value && options?.once) return
      
      options && options.onInView && options.onInView(target as any)
      
      ranOnce.value = true
      
      return () => {
        if (options?.once) return
        
        ranOnce.value = false
        
        options && options.onOutView && options.onOutView(target as any)
      }
    }, {
      amount: 0.1,
      ...(options ?? {})
    })
  }, { immediate: true })
  
  return computed(() => ranOnce.value)
}
