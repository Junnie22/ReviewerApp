import React from 'react'
//theme
import { ThemeProvider, createTheme } from '@mui/material'
import theme from '../utils/theme'
//router
import { Routes, Route } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18n from '../utils/i18n'
import { useSelector } from 'react-redux';
import LandingPage from '../pages/LandingPage';


export default function Navigation() {
    const ui = useSelector((state) => state.ui);
    const THEME = createTheme(theme(ui.isDarkMode));
    return (
        <ThemeProvider theme={THEME}>
            <I18nextProvider i18n={i18n}>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                </Routes>
            </I18nextProvider>
        </ThemeProvider>
    )

}