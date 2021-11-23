import React, { useState } from 'react'
import { Box, TextField } from '@mui/material'
import { useTranslation } from 'react-i18next';

export default function Language() {
    const { i18n } = useTranslation();

    const [state, setState] = useState({
        value: ''
    });
    const languages = [
        {
            value: 'EN',
            label: 'English',
        },
        {
            value: 'CMN',
            label: 'Chinese(Simp)',
        },
        {
            value: 'FIL',
            label: 'Filipino',
        },
    ];
    const handleChange = (e) => {
        i18n.changeLanguage(e.target.value)
        setState(e.target.value)
    };
    
    return (
        <Box>
            <TextField
                id="standard-select-language-native"
                select
                label="Language"
                value={state}
                onChange={handleChange}
                SelectProps={{
                    native: true,
                }}
            >
                {languages.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </TextField>
        </Box>
    )
}
