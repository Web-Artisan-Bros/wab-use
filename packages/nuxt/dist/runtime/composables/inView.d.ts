interface Options {
    once?: boolean;
    amount?: number;
    onInView?: (el: HTMLElement) => void;
    onOutView?: (el: HTMLElement) => void;
}
export declare function useInView(el: any, options?: Options | undefined): import("vue").ComputedRef<boolean>;
export {};
