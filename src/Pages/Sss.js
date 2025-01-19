import React from 'react'
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const theme = createTheme({
    typography: {
        h1: {
            fontSize: '20px', // Varsayılan font boyutu (xs)
            '@media (min-width:600px)': {
                fontSize: '20px', // sm için font boyutu
            },
            '@media (min-width:960px)': {
                fontSize: '23px', // md için font boyutu
            },
            '@media (min-width:1280px)': {
                fontSize: '25px', // lg için font boyutu
            },
            fontWeight: 'bold' 
        },
        h2: {
            fontSize: '18px', // Varsayılan font boyutu (xs)
            '@media (min-width:600px)': {
                fontSize: '18px', // sm için font boyutu
            },
            '@media (min-width:960px)': {
                fontSize: '20px', // md için font boyutu
            },
            '@media (min-width:1280px)': {
                fontSize: '23px', // lg için font boyutu
            },
            fontWeight: 'bold' 
        },
       
        h4: {
            fontSize: '14px', // Varsayılan font boyutu (xs)
            '@media (min-width:600px)': {
                fontSize: '14px', // sm için font boyutu
            },
            '@media (min-width:960px)': {
                fontSize: '16px', // md için font boyutu
            },
            '@media (min-width:1280px)': {
                fontSize: '18px', // lg için font boyutu
            },
        },
    },
});

function Sss() {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography variant="h1" gutterBottom>
                     Sıkça Sorulan Sorular
                </Typography>
            </Box>
            <Divider></Divider>
            <Box sx={{
                flexGrow: 1, p: 5, backgroundColor: 'transparent', borderRadius: 10, marginTop: '5%',
                boxShadow: '1px 1px 185px -23px rgb(78, 142, 225)',
                webkitBoxShadow: '1px 1px 185px -23px rgba(62, 113, 240, 0.43)',
                mozBoxShadow: '1px 1px 185px -23px rgba(101, 150, 254, 0.43)',
                 alignItems: 'center'
            }}>


            </Box>
        </ThemeProvider>

    )
}

export default Sss