import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            primary: string;
            text: {
                regular: string;
                light: string;
                dark: string;
            };
            background: {
                blur: string;
                regular: string;
                dark: string;
                light: string;
                hover: string;
            };
            footer: string;
        };
    }
}
