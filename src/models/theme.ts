import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        typography : {
            fontFamily: string;
        },
        palette: {
            background: {
                primary: string;
                secondary: string;
                terciary: string;
            },
            text: {
                primary: string;
                secondary: string;
            }
        }
    }
}