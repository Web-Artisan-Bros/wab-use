import { inView } from "framer-motion/dom";
import { computed, isRef, ref, watch } from "vue";
export function useInView(el, options) {
  const ranOnce = ref(false);
  watch(() => el, (el2) => {
    if (!el2 || isRef(el2) && !el2.value)
      return;
    inView(isRef(el2) ? el2.value : el2, ({ target }) => {
      if (ranOnce.value && options?.once)
        return;
      options && options.onInView && options.onInView(target);
      ranOnce.value = true;
      return () => {
        if (options?.once)
          return;
        ranOnce.value = false;
        options && options.onOutView && options.onOutView(target);
      };
    }, {
      amount: 0.1,
      ...options ?? {}
    });
  }, { immediate: true });
  return computed(() => ranOnce.value);
}
