import React, { useState } from 'react'

import { Grid, TextField, Typography, OutlinedInput, InputAdornment, IconButton, FormControl, InputLabel, Button } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import GoogleIcon from '@mui/icons-material/Google';

const classes = {
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    myTextField: {
        width: 300,
        margin: 1,
    },
    myTitle: {
        fontSize: '3rem',
        fontFamily: 'Varela Round',
        fontWeight: 'bold'
    },
    myText: {
        fontSize: '1rem',
        opacity: '0.7',
        textAlign: 'center',
        fontFamily: 'Varela Round',
    },
    myLabels: {
        fontSize: '1rem',
        paddingLeft: 1,
        textAlign: 'center',
        fontFamily: 'Varela Round',
    },
}

export default function Login() {

    const [payload, setPayload] = useState({
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setPayload({ ...payload, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setPayload({
            ...payload,
            showPassword: !payload.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <Grid container sx={classes.container}>
            <Typography sx={classes.myTitle}>Log In</Typography>

            <Button color='inherit' sx={{ m: 1, textTransform: 'none' }}>
                <Grid item display='flex'><GoogleIcon /><Typography sx={classes.myLabels}>Login with Google</Typography></Grid>
            </Button>

            <Typography sx={classes.myText}>or use your account</Typography>

            <TextField sx={classes.myTextField} label="Email" variant="outlined" />

            <FormControl sx={classes.myTextField} variant="outlined" >
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={payload.showPassword ? 'text' : 'password'}
                    value={payload.password}
                    onChange={handleChange('password')}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {payload.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Password"
                />
            </FormControl>

            <Button variant="contained" color='primary' sx={{textTransform: 'none'}}><Typography sx={{fontFamily: 'Varela Round', fontSize: '1rem'}}>Login</Typography></Button>

        </Grid>
    )
}
