import * as React from 'react';
import { Button, Grid, TextField } from "@mui/material";
import Admin from '../layouts/admin';
import { Box } from '@mui/system';
import styles from "../static/styles/name.module.scss"
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Example from "../components/example"

function ActiveAccount() {
   const [email, setEmail] = React.useState("");
   const [check, setCheck] = React.useState(false);
   const { t } = useTranslation("common")
  
   React.useEffect(() => {
      setTimeout(() => {
         setCheck(true)
      }, 500);
   }, [])

   const clickActive = () => {
      console.log(email);
   }
   // console.log(process.env);

   return (
      <Admin>
         {check ? <Example/> : null}
         {/* {check ? <div id="paypal-button-container"></div> : null} */}
         <Link
            // activeClassName={locale === "vi-VN"}
            href={`/active-account?language=vi`}
            locale="vi"
         >
            es-ES
         </Link>

         <Link
            // activeClassName={locale === "en-US"}
            // href={asPath}
            href={`/active-account?language=en`}
            locale="en"
         >
            en-US
         </Link>
         <Grid container>
            <Grid item xs={8} sm={8} md={6} lg={5} xl={5} sx={{ mb: 2 }}>
               <input
                  type="email"
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                  className="form-control flex-1 h1-common"
                  id="" placeholder="Nhập mail" />
            </Grid>
            <Box sx={{ mx: 1 }}></Box>
            <Button
               onClick={clickActive}
               variant="contained" className="bg-primari h1-common" sx={{ mb: 2 }}>Kích hoạt {t('about')}
            </Button>
         </Grid>
      </Admin>
   )
}
export async function getStaticProps({ locale }) {
   // const res = await fetch(`https://time.hidemyacc.com/`)
   // const resres = await res.json()
   // let lang = "en"
   // if (resres.country == "VN") {
   //    lang = "vi"
   // }
   // Pass data to the page via props
   const data = await serverSideTranslations(locale, ["common"])
   // console.log(locale, lang);

   return { props: { ...data } }
};
export default ActiveAccount;