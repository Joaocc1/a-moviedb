const baseTheme = {
    typography: {
        fontFamily: 'monospace',
    }
};

export const lightTheme = {
    ...baseTheme,
    palette: {
        background: {
            primary: "#ffffff",
            secondary: "#d8d8d8",
            terciary: "#aeaeae",
        },
        text: {
            primary: "#ffffff",
            secondary: "#2f2f2f",
        }
    }
}

export const darkTheme = {
    ...baseTheme,
    palette: {
        background: {
            primary: "#000000",
            secondary: "#2f2f2f",
            terciary: "#3b3b44",
        },
        text: {
            primary: "#ffffff",
            secondary: "#2f2f2f",
        }
    }
}