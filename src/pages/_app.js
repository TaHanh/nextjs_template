import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import "../static/styles/index.scss"
import { useRouter } from 'next/dist/client/router';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
// import store from "../store";
// import { Provider, useStaticRendering } from "mobx-react";
// import { configure } from "mobx";

// const isServer = !process.browser;

// configure({ enforceActions: "observed" });
// useStaticRendering(isServer);

function MyApp(props) {
  const { Component, pageProps } = props;
  const router = useRouter()
  const mdTheme = createTheme();
  return (
    <React.Fragment>
      <Head>
        <title>App</title>
        <meta content="minimum-scale=1, initial-scale=1, width=device-width" name="viewport" />
      </Head>
      <ThemeProvider theme={mdTheme}>
        <CssBaseline />
        {/* <Provider store={store}> */}
          <Component {...pageProps} />
        {/* </Provider> */}
      </ThemeProvider>
    </React.Fragment>
  );
}
// MyApp.getInitialProps = async ({ Component, ctx }) => {
//   const pageProps = Component.getInitialProps
//     ? await Component.getInitialProps(ctx)
//     : {};
//   return { pageProps: pageProps };
// }
export default appWithTranslation(MyApp);