import { HoldOnProperties } from './holdOnProperties';
export type HoldOnTheme = "custom" | "sk-dot" | "sk-rect" | "sk-cube" | "sk-bounce" | "sk-circle" | "sk-cube-grid" | "sk-folding-cube" | "sk-fading-circle";
export declare function open(properties?: HoldOnProperties): boolean;
export declare function close(): boolean;
declare const HoldOn: {
    open: typeof open;
    close: typeof close;
};
export default HoldOn;
