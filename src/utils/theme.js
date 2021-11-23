
const theme = (isDarkMode) => ({
    palette: {
        mode: isDarkMode ? 'dark' : 'light',
        primary: {
            main: '#5375e2',
            contrastText: 'rgba(0, 0, 0, 0.87)',
        },
        secondary: {
            main: '#7791a1',
            contrastText: 'rgba(0, 0, 0, 0.87)',
        },
        info: {
            main: '#2196f3',
        },
    },
    breakpoints: {
        values: {
            sm: 600,
            md: 900,
            lg: 1200,
        },
    },
});
export default theme;