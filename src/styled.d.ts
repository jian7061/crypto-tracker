import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    whiteBgColor: string;
    accentColor: string;
    positiveColor: string;
    negativeColor: string;
  }
}
