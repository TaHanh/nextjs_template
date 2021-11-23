import * as React from 'react';
import { Button, Grid, TextField } from "@mui/material";
import Admin from '../layouts/admin';
import { Box } from '@mui/system';

function TransactionConfirmation() {
   const [code, setCode] = React.useState("");
   const clickConfirm = () => {
      console.log(code);
   }
   return (
      <Admin>
         <Grid container>
            <Grid item xs={8} sm={8} md={6} lg={5} xl={5} sx={{ mb: 2 }}>
               <input type="email"
                  value={code}
                  onChange={event => setCode(event.target.value)}
                  className="form-control flex-1 h1-common" id="" placeholder="Nhập Code" />
            </Grid>
            <Box sx={{ mx: 1 }}></Box>
            <Button
               onClick={clickConfirm}
               variant="contained" className="bg-primari h1-common" sx={{ mb: 2 }}>Xác nhận</Button>
         </Grid>
      </Admin>
   )
}
export default TransactionConfirmation;