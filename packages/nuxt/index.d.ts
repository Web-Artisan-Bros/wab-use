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

export { useInView, useProxyMedia, useTouchOnly };
