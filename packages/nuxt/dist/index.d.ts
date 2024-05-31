interface Options {
    once?: boolean;
    amount?: number;
    onInView?: (el: HTMLElement) => void;
    onOutView?: (el: HTMLElement) => void;
}
declare function useInView(el: any, options?: Options | undefined): any;

declare function useProxyMedia(path: string): string;

declare function useTouchOnly(): {
    isTouchOnly: any;
};

// fake types to allow nuxt command to be correctly parsed
declare global {
  const onNuxtReady: (cb: () => any) => any
  const watch: (toWatch: any, cb: (val: any) => any, options: any) => any
  const computed: <T>(cb: () => any) => any
  const ref: <T>(val: any) => any
  const isRef: (val: any) => any
  const useRequestURL: () => any
  const useComputed: (val: any) => any
  const $fetch: (url: string, options: any) => any
}

export { useInView, useProxyMedia, useTouchOnly };
