export type SvgMediaType = {
    html?: string;
    props?: any;
    id: string;
    error?: any;
};
export declare const useSvgMedia: import("pinia").StoreDefinition<"wabSvgMedia", import("pinia")._UnwrapAll<Pick<{
    icons: import("vue").Ref<Record<string, SvgMediaType>>;
    add: (url: string, svg?: any) => void;
    has: (url: string) => boolean;
    get: (url: string) => SvgMediaType;
    load: (url: string, data: any) => void;
    searchForSvg: (parent: any) => any;
    iconsList: import("vue").ComputedRef<SvgMediaType[]>;
}, never>>, Pick<{
    icons: import("vue").Ref<Record<string, SvgMediaType>>;
    add: (url: string, svg?: any) => void;
    has: (url: string) => boolean;
    get: (url: string) => SvgMediaType;
    load: (url: string, data: any) => void;
    searchForSvg: (parent: any) => any;
    iconsList: import("vue").ComputedRef<SvgMediaType[]>;
}, "icons" | "add" | "has" | "get" | "load" | "searchForSvg" | "iconsList">, Pick<{
    icons: import("vue").Ref<Record<string, SvgMediaType>>;
    add: (url: string, svg?: any) => void;
    has: (url: string) => boolean;
    get: (url: string) => SvgMediaType;
    load: (url: string, data: any) => void;
    searchForSvg: (parent: any) => any;
    iconsList: import("vue").ComputedRef<SvgMediaType[]>;
}, "add" | "has" | "get" | "load" | "searchForSvg">>;
