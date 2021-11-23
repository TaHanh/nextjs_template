import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import PaymentIcon from '@mui/icons-material/Payment';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { Button, TextField, ListItem, ListItemText, ListItemIcon } from '@mui/material';

import { useRouter } from 'next/dist/client/router';
import { RoutesName } from '../routes/contant';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
   shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
   zIndex: theme.zIndex.drawer + 1,
   transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
   }),
   ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.enteringScreen,
      }),
   }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
   ({ theme, open }) => ({
      '& .MuiDrawer-paper': {
         position: 'relative',
         whiteSpace: 'nowrap',
         width: drawerWidth,
         transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
         }),
         boxSizing: 'border-box',
         ...(!open && {
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
               easing: theme.transitions.easing.sharp,
               duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up('sm')]: {
               width: theme.spacing(9),
            },
         }),
      },
   }),
);

function DrawerComponent() {
   const [open, setOpen] = React.useState(true);
   const router = useRouter()
   const path = router.pathname;
   const toggleDrawer = () => {
      window.localStorage.setItem("setOpen", !open)
      // console.log(window.localStorage.getItem("setOpen"));
      setOpen(!open);
   };

   React.useEffect(() => {
   }, [])

   return (
      <React.Fragment>
         <AppBar position="absolute" open={open}
         >
            <Toolbar
               sx={{
                  pr: '24px', // keep right padding when drawer closed
               }}
               className="bg-primari"
            >
               <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  onClick={toggleDrawer}
                  sx={{
                     marginRight: '36px',
                     ...(open && { display: 'none' }),
                  }}
               >
                  <MenuIcon />
               </IconButton>
               <Typography
                  component="h1"
                  variant="h6"
                  color="inherit"
                  noWrap
                  sx={{ flexGrow: 1 }}
               >
                  {path == `/${RoutesName.ActiveAccount}` ? "Kích hoạt tài khoản" : path == `/${RoutesName.TransactionConfirmation}` ? "Xác nhận giao dịch" : path == `/${RoutesName.CreateShareAccount}` ? "Tạo tài khoản share" : "Dashboard"}
               </Typography>

            </Toolbar>
         </AppBar>
         <Drawer variant="permanent" open={open}>
            <Toolbar
               sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  px: [1],
               }}
            >
               <IconButton onClick={toggleDrawer}>
                  <ChevronLeftIcon />
               </IconButton>
            </Toolbar>
            <Divider />
            <List>
               <ListItem button selected={path == `/${RoutesName.ActiveAccount}`} onClick={() => router.push(`/${RoutesName.ActiveAccount}`)}>
                  <ListItemIcon>
                     <DashboardIcon />
                  </ListItemIcon>
                  <ListItemText primary="Kích hoạt tài khoản" />
               </ListItem>
               <ListItem button selected={path == `/${RoutesName.TransactionConfirmation}`} onClick={() => router.push(`/${RoutesName.TransactionConfirmation}`)}>
                  <ListItemIcon>
                     <PaymentIcon />
                  </ListItemIcon>
                  <ListItemText primary="Xác nhận giao dịch" />
               </ListItem>
               <ListItem button selected={path == `/${RoutesName.CreateShareAccount}`} onClick={() => router.push(`/${RoutesName.CreateShareAccount}`)}>
                  <ListItemIcon>
                     <SupervisorAccountIcon />
                  </ListItemIcon >
                  <ListItemText primary="Tạo tài khoản Share" />
               </ListItem>
               <style jsx global>{`
                  .MuiListItem-button{
                  padding-left: 20px
                  }
                  .MuiListItemIcon-root{
                  min-width: 50px
                  }
                  .Mui-selected{
                     background-color: #003970 !important;
                     color: #fff;
                  }
                  .Mui-selected .MuiListItemIcon-root{
                     color: #fff;
                  }
               `}</style>
            </List>
         </Drawer>
      </React.Fragment>
   )

}

export default DrawerComponent;