import React from 'react'
import { Box, Grid, Typography, } from '@mui/material'
import reading from '../images/reading.gif'
import { useTranslation } from 'react-i18next';
const classes = {
    container: {
        backgroundColor: (theme) => theme.palette.background.default,
    },
    frame: {
        display: 'flex',
        minWidth: '100vw',
        minHeight: '100vh',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',

    }
}
export default function LandingPage() {
    return (
        <Grid sx={classes.container}>
            <Box sx={classes.frame}>
                <Grid item sm={10} lg={5}>
                    <img src={reading} alt='reading' />
                    <Typography sx={{ fontSize: 54 }}>{t('Hello.1')}</Typography>
                </Grid>
                <Grid item sm={10} lg={5}>
                    <img src={reading} alt='reading' />

                </Grid>
            </Box>
        </Grid>
    )
}
