
const theme = (isDarkMode) => ({
    palette: {
        mode: isDarkMode ? 'dark' : 'light',
        primary: {
            main: '#82CDBC',
            contrastText: 'rgba(0, 0, 0, 0.87)',
        },
        secondary: {
            main: '#AD5E61',
            contrastText: 'rgba(0, 0, 0, 0.87)',
        },
        thirtiary: {
            main: '#A0CEDE',
            contrastText: 'rgba(0, 0, 0, 0.87)',
        },
        info: {
            main: '#2196f3',
        },
    },
});
export default theme;