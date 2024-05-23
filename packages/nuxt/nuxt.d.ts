// fake types to allow nuxt command to be correctly parsed
declare global {
  const onNuxtReady: (cb: () => any) => any
  const watch: (toWatch: any, cb: (val: any) => any, options: any) => any
  const computed: (cb: () => any) => any
  const ref: (val: any) => any
  const isRef: (val: any) => any
  const useRequestURL: () => any
  const useComputed: (val: any) => any
}

export {}
