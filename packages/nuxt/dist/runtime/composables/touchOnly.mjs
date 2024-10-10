import { ref } from "vue";
export function useTouchOnly() {
  const isTouchOnly = ref(false);
  isTouchOnly.value = window.matchMedia("(any-pointer: coarse)").matches;
  return { isTouchOnly };
}
