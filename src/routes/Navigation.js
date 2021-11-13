import React from 'react'
//theme
import { ThemeProvider, createTheme } from '@mui/material'
import theme from '../utils/theme'
//router
import { Routes, Route } from 'react-router-dom'

import { useSelector } from 'react-redux';
import LandingPage from '../pages/LandingPage';
import Header from '../components/Header';


export default function Navigation() {
    const ui = useSelector((state) => state.ui);
    const THEME = createTheme(theme(ui.isDarkMode));

    return (
        <ThemeProvider theme={THEME}>
            <Header />
            <Routes>
                <Route path="/" element={<LandingPage />} />
            </Routes>
        </ThemeProvider>
    )

}