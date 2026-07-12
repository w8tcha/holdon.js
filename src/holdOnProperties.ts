import { HoldOnTheme } from './holdOn';


export interface HoldOnProperties {
  theme?: HoldOnTheme;
  message?: string;
  content?: string;
  backgroundColor?: string;
  textColor?: string;
  executeOnOpen: (() => void) | null;
}
