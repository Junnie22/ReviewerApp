import React, { useState } from 'react'
import { Box, TextField } from '@mui/material'
import { useTranslation } from 'react-i18next';

// const classes = {
//     menuLink: {
//         color: (theme) => theme.palette.text.primary,
//         fontSize: 14,
//         marginLeft: 2,
//         "&:hover": {
//             color: (theme) => theme.palette.secondary.main
//         }
//     },
// }



export default function Language() {
    const { t, i18n } = useTranslation();
    const language = [
        {
            value: 'en',
            label: 'English',
        },
        {
            value: 'cmn',
            label: 'Chinese(Simp)',
        },
        {
            value: 'fil',
            label: 'Filipino',
        },
    ];
    const [word, setWord] = React.useState('en');

    const handleChange = (event) => {
        setWord(event.target.value);
        i18n.changeLanguage(event.target.value)
    };

    return (
        <Box>
            <TextField
                id="standard-select-language-native"
                select
                label="Language"
                value={word}
                onChange={handleChange}
                SelectProps={{
                    native: true,
                }}
            >
                {language.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </TextField>

            <p>{t('Hello.1')}</p>
        </Box>
    )
}
