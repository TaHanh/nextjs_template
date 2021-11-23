import * as React from 'react';
import { Button, Grid, TextField } from "@mui/material";
import { Box } from '@mui/system';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Admin from '../layouts/admin';


function CreateShareAccount() {
   const [value, setValue] = React.useState(new Date());
   const [email, setEmail] = React.useState("");
   const [price, setPrice] = React.useState("");
   const clickActive = () => {
      console.log(email, value, price);
   }
   return (
      <Admin>
         <Box>
            <Grid container>
               <Grid item xs={8} sm={8} md={6} lg={5} xl={5}>
                  <div className="input-group flex-1 mb-2">
                     <span
                        className="input-group-text" id="">Nhập email</span>
                     <input type="text"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        className="form-control h1-common" />
                  </div>
               </Grid>
               <Box sx={{ mx: 1 }}></Box>
               <Button variant="contained" className="bg-primari h1-common mb-2" onClick={clickActive}>Kích hoạt</Button>
            </Grid>
            <div className="input-group mb-3 mt-2 datepicker-custom">
               <span className="input-group-text " id="">Đến ngày</span>
               <LocalizationProvider dateAdapter={AdapterDateFns} className="datepicker-custom" >
                  <DatePicker
                     disableFuture
                     inputFormat="dd/MM/yyyy"
                     value={value}
                     onChange={(newValue) => {
                        setValue(newValue);
                     }}
                     renderInput={(params) => <TextField {...params} />}
                     sx={{ p: 0 }}
                     className="datepicker-custom1"
                  />
               </LocalizationProvider>
            </div>
            <Grid container>
               <Grid item xs={8} md={6} lg={4} xl={6}>
                  <div className="input-group mb-3 h1-common">
                     <span className="input-group-text" id="">Số tiền</span>
                     <input type="text"
                        value={price}
                        onChange={event => setPrice(event.target.value)}
                        className="form-control" />
                  </div>
               </Grid>
            </Grid>

            <style jsx global>{`
                  .input-group-text{
                     min-width: 110px;
                  }
                  .datepicker-custom input{
                     height: 45px;
                         padding-top: 0;
                         padding-bottom: 0;
                         
                  }
                  .datepicker-custom .MuiFormControl-root{
                     height: 45px;
                     border: 1px solid #ced4da;
                     border-radius: 0.25rem;
                     background: #fff;
                  }
                  .datepicker-custom fieldset{
                     border: none;
                  }
                  
               `}</style>
         </Box>

      </Admin>
   )
}
export default CreateShareAccount;