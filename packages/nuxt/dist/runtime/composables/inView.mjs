import { inView } from "framer-motion/dom";
import { computed, isRef, ref, watch } from "vue";
export function useInView(el, options) {
  const state = ref(false);
  watch(() => el, (el2) => {
    if (!el2 || isRef(el2) && !el2.value)
      return;
    inView(isRef(el2) ? el2.value : el2, ({ target }) => {
      state.value = true;
      options && options.onInView && options.onInView(target);
      return () => {
        state.value = false;
        options && options.onOutView && options.onOutView(target);
      };
    }, {
      amount: 0.1,
      ...options ?? {}
    });
  }, { immediate: true });
  return computed(() => state.value);
}
