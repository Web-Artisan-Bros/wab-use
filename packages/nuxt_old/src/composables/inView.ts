import { inView } from 'framer-motion/dom'
import { computed, isRef, ref, watch } from 'vue'

interface Options {
  once?: boolean
  amount?: number
  onInView?: (el: HTMLElement) => void
  onOutView?: (el: HTMLElement) => void
}

export function useInView (el: any, options?: Options | undefined) {
  const state = ref(false)
  
  watch(() => el, (el) => {
    if (!el || isRef(el) && !el.value) return
    
    inView(isRef(el) ? el.value : el, ({ target }) => {
      state.value = true
      
      options && options.onInView && options.onInView(target as any)
      
      return () => {
        state.value = false
        
        options && options.onOutView && options.onOutView(target as any)
      }
    }, {
      // @ts-ignore
      amount: 0.1,
      ...(options ?? {})
    })
  }, { immediate: true })
  
  return computed(() => state.value)
}
