export function useTouchOnly () {
  const isTouchOnly = ref(false)
  
  onNuxtReady(() => {
    isTouchOnly.value = window.matchMedia('(any-pointer: coarse)').matches
  })
  
  return { isTouchOnly }
}
