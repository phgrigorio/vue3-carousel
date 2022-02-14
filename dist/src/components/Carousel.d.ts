import { Breakpoints } from '@/types';
declare const _default: import("vue").DefineComponent<{
    itemsToShow: {
        default: number;
        type: NumberConstructor;
    };
    itemsToScroll: {
        default: number;
        type: NumberConstructor;
    };
    wrapAround: {
        default: boolean | undefined;
        type: BooleanConstructor;
    };
    snapAlign: {
        default: "start" | "end" | "center" | "center-even" | "center-odd";
        validator(value: string): boolean;
    };
    transition: {
        default: number | undefined;
        type: NumberConstructor;
    };
    breakpoints: {
        default: Breakpoints | undefined;
        type: ObjectConstructor;
    };
    autoplay: {
        default: number | undefined;
        type: NumberConstructor;
    };
    pauseAutoplayOnHover: {
        default: boolean | undefined;
        type: BooleanConstructor;
    };
    modelValue: {
        default: undefined;
        type: NumberConstructor;
    };
    mouseDrag: {
        default: boolean | undefined;
        type: BooleanConstructor;
    };
    touchDrag: {
        default: boolean | undefined;
        type: BooleanConstructor;
    };
    settings: {
        default(): {};
        type: ObjectConstructor;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    itemsToShow?: unknown;
    itemsToScroll?: unknown;
    wrapAround?: unknown;
    snapAlign?: unknown;
    transition?: unknown;
    breakpoints?: unknown;
    autoplay?: unknown;
    pauseAutoplayOnHover?: unknown;
    modelValue?: unknown;
    mouseDrag?: unknown;
    touchDrag?: unknown;
    settings?: unknown;
} & {
    itemsToShow: number;
    itemsToScroll: number;
    wrapAround: boolean;
    snapAlign: "start" | "end" | "center" | "center-even" | "center-odd";
    transition: number;
    breakpoints: Record<string, any>;
    autoplay: number;
    pauseAutoplayOnHover: boolean;
    mouseDrag: boolean;
    touchDrag: boolean;
    settings: Record<string, any>;
} & {
    modelValue?: number | undefined;
}>, {
    itemsToShow: number;
    itemsToScroll: number;
    wrapAround: boolean;
    snapAlign: "start" | "end" | "center" | "center-even" | "center-odd";
    transition: number;
    breakpoints: Record<string, any>;
    autoplay: number;
    pauseAutoplayOnHover: boolean;
    modelValue: number;
    mouseDrag: boolean;
    touchDrag: boolean;
    settings: Record<string, any>;
}>;
export default _default;
