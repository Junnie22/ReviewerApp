import React from 'react'
import { Card, Grid, Typography, Button, Collapse } from '@mui/material'
import reading from '../images/reading.gif'
// import { useTranslation } from 'react-i18next';
import Login from '../components/Login';
import Register from '../components/Register';


const classes = {
    container: {
        backgroundColor: (theme) => theme.palette.background.default,
        display: 'flex',
        minWidth: '100vw',
        minHeight: '100vh',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        "@media (max-width: 600px)": {
            flexDirection: 'column',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
        },
        width: (theme) => theme.breakpoints.values
    },
    myCard: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '30vw',
        height: '60vh',
        border: '10px solid ',
        padding: 3,
        overFlow: 'hidden',
        "@media (max-width: 600px)": {
            justifyContent: 'center',
            alignItems: 'center',
            minWidth: '90vw',
            minHeight: '60vh',
            marginTop: 2,
            padding: 1,
        },
        borderColor: (theme) => !theme.palette.background.default,
        backgroundColor: (theme) => theme.palette.background.default,
    },
    leftCard: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '50vw',
        maxHeight: '100vh',
        "@media (max-width: 600px)": {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: '100vw',
            maxHeight: '100vh',
            margin: 2,
        },
        backgroundColor: (theme) => theme.palette.background.default,
    },
    myTitle: {
        fontSize: '5rem',
        fontFamily: 'Varela Round',
        fontWeight: 'bold',
        textAlign: 'center',
        "@media (max-width: 600px)": {
            fontSize: '3rem',
        },
    },
}
export default function LandingPage() {
    // const { t } = useTranslation();
    console.log(classes.container.flexDirection)
    const [clicked, setClicked] = React.useState(false);
    const handleChange = () => {
        setClicked((prev) => !prev);
    };
    return (
        <Grid sx={classes.container} >
            <Grid item sm={10} lg={5}>
                <Card sx={classes.leftCard}>
                    <img src={reading} alt='reading' width="100%" />
                    <Typography sx={classes.myTitle} >Reviewees</Typography>
                </Card>
            </Grid>
            <Grid>
                <Card sx={classes.myCard} >
                    <Button onClick={handleChange} sx={{ marginTop: -15 }}>{clicked === true ? 'Go to Log In' : 'Go to Sign Up'}</Button>
                    <Collapse in={!clicked} orientation='horizontal' >
                        <Login />
                    </Collapse>
                    <Collapse in={clicked} orientation='horizontal' sx={{ position: 'absolute' }}>
                        <Register />
                    </Collapse>
                </Card>
            </Grid>
        </Grid >
    )
}
