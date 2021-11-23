import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link href="/logo.png" rel="icon" />
                    <link
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    />
                    <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                        crossOrigin="anonymous"
                    />

{/* 
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.13.1/umd/react.production.min.js"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.13.1/umd/react-dom.production.min.js"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.38/browser.js"></script> */}

                    <script src="https://www.paypal.com/sdk/js?client-id=sb"></script>
                    <script src="https://www.paypalobjects.com/api/checkout.js" />
                    {/* <script src="https://www.paypal.com/sdk/js?client-id=AaJMejIDjhumOr48XsycjfvQegxAku1dHdrA0DNfkqFSg7bFFkpJTnnwyaLIGUFsPijWx1g51gxp9F-5&currency=USD&components=buttons&disable-funding=credit,card" data-namespace="paypal_sdk"></script> */}
                    {/* <script src="https://www.paypal.com/sdk/js?client-id=ASKubZJSMqA7_0E2HE3yRKIej3xO92wyK6j6PKSfyyDZljGO23sh_xnOyHH7wIYHR2nPSLZjTZiihw6B&currency=CAD&components=buttons&disable-funding=credit,card" data-namespace="paypal_sdk"></script> */}
                    {/* <script src="https://www.paypal.com/sdk/js?client-id=test"></script> */}

                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

// https://github.com/vercel/next.js/blob/master/examples/with-styled-components/pages/_document.js
MyDocument.getInitialProps = async (ctx) => {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
            });

        const initialProps = await Document.getInitialProps(ctx);
        return {
            ...initialProps,
            styles: (
                <React.Fragment>
                    {initialProps.styles}
                    {sheet.getStyleElement()}
                </React.Fragment>
            ),
        };
    } finally {
        sheet.seal();
    }
};