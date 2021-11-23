import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import DrawerComponent from '../components/drawer-component';
import { useRouter } from 'next/dist/client/router';

function Copyright(props) {
   return (
      <Typography variant="body2" color="text.secondary" align="right" {...props}>
         {/* {'Copyright © '} */}
         <Link color="inherit" href="https://hidemyacc.com/">
           Hidemyacc
         </Link>{' '}
         {new Date().getFullYear()}
         {'.'}
      </Typography>
   );
}

const mdTheme = createTheme();

function Admin({ children }) {
   return (
      <ThemeProvider theme={mdTheme}>
         <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <DrawerComponent />
            <Box
               component="main"
               sx={{
                  backgroundColor: (theme) =>
                     theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[900],
                  flexGrow: 1,
                  height: '100vh',
                  overflow: 'auto',

               }}
            >
               <Toolbar />
               <Container maxWidth="xl" sx={{ mt: 4, mb: 3 }}>
                  <Box sx={{minHeight: "calc(100vh - 180px)"}}>
                  {children}
                  </Box>
                  <Copyright sx={{ pt: 3 }} />
               </Container>
            </Box>
         </Box>
      </ThemeProvider>
   );
}

export default Admin;
