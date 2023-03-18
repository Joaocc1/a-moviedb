import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        typography : {
            fontFamily: string;
            fontSize: string;
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