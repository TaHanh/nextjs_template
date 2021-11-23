import React from 'react';
import ReactDOM from 'react-dom';
import scriptLoader from "react-async-script-loader";

import { PayPalButton } from "react-paypal-button-v2";
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";

//             PayPalButton: () => <div>PAYPAL BUTTON PLACEHOLDER</div>,
//             env: 'sandbox',
//             commit: true,
//             client: {
//                 sandbox: 'AWi18rxt26-hrueMoPZ0tpGEOJnNT4QkiMQst9pYgaQNAfS1FLFxkxQuiaqRBj1vV5PmgHX_jA_c1ncL',
//                 production: '<insert production client id>',
//             },


function Example() {
    const amount1 = "2";
    const PAYMENT_CURRENCY = "USD";
    const amount = {
        currency_code: PAYMENT_CURRENCY,
        value: "10"
    };
    const sandbox = "sb-3lqf98674441@business.example.com"
    let clientID = "Ab9rJrOVyueKjT6hZh9VH-MgRZvMU6lQrJgB6oqJ3ujh0T7RCt52_mtTE9j8FlEsXDlrXWf5Flpu-6Ae"
    clientID = "ASKubZJSMqA7_0E2HE3yRKIej3xO92wyK6j6PKSfyyDZljGO23sh_xnOyHH7wIYHR2nPSLZjTZiihw6B"
    const client = {
        sandbox:
            "ASKubZJSMqA7_0E2HE3yRKIej3xO92wyK6j6PKSfyyDZljGO23sh_xnOyHH7wIYHR2nPSLZjTZiihw6B",
    }
    // https://paypal.github.io/react-paypal-js/?path=/docs/example-paypalbuttons--default

    const paypal = React.useRef();
    React.useEffect(() => {
        // window.React = React;
        // window.ReactDOM = ReactDOM;
        if ((window && window.paypal === undefined) || (window && window.paypal.Buttons === undefined)) {
            addPaypalSdk("sb", () => {
                // initPayPal();
            })
        }
        initPayPal();
    }, [])
    function initPayPal() {
        window.paypal
            .Buttons({
                env: clientID,
                currency: "USD",
                createOrder: (data, actions, err) => {
                    return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                            {
                                description: "Cool looking table",
                                amount: {
                                    currency_code: "CAD",
                                    value: 650.0,
                                },
                            },
                        ],
                    });
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
                    console.log(order);
                },
                onError: (err) => {
                    console.log(err);
                },
            })
            .render(paypal.current);
    }
    // Custom component to wrap the PayPalButtons and handle currency changes
    function createOrder(data, actions) {
        // throw new Error("force the createOrder callback to fail");
        return actions.order.create({
            purchase_units: [
                {
                    amount,
                    shipping: {
                        // name: "Hello Brother",
                        // method: "United States Postal Service",
                        name: {
                            full_name: ""
                        },
                        type: "SHIPPING",
                        address: {
                            address_line_1: "",
                            address_line_2: "",
                            admin_area_2: "",
                            admin_area_1: "A",
                            postal_code: "",
                            country_code: ""
                        }
                    }
                }
            ]
            // application_context: {
            //   shipping_preference: "NO_SHIPPING"
            // }

        });

    }
    function onShippingChange(data, actions) {
        console.log("inside onshipping change", data);
        // Trying to send error
        return new Promise(function (resolve, reject) {
            reject(new Error());
        });

        if (data.selected_shipping_option) {
            return actions.resolve();
        }
        return actions.order.patch([
            {
                op: "replace",
                path: "/purchase_units/@reference_id=='default'/amount",
                value: {
                    currency_code: PAYMENT_CURRENCY,
                    value: "12"
                }
            },
            {
                op: "add",
                path: "/purchase_units/@reference_id=='default'/shipping/address",
                value: {
                    address_line_1: "test",
                    address_line_2: "test",
                    admin_area_2: "asd",
                    admin_area_1: "CA",
                    postal_code: "95131",
                    country_code: "US"
                }
            }
        ]);

        // on initial load
        return actions.approve();
        // works fine with
        // return actions.resolve();
    }
    function oninit(data, actions) {
        // actions.disable();
        // return actions.disable();
        console.log("inside init");
    }
    function onClick(data, actions) {
        // actions.disable();
        console.log("inside click");
        // return actions.resolve();
    }
    function onApprove(data, actions) {
        console.log("data", data);
        // return actions.order.authorize().then((details) => {
        //   console.log(details);
        //   console.log(details.purchase_units[0].payments.authorizations[0].id);
        // });
    }
    function onError(err) {
        console.error("error from the onError callback", err);
    }

    const addPaypalSdk = (clientID, callBack) => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = `https://www.paypal.com/sdk/js?client-id=${clientID}`;
        console.log(script.src);
        script.async = true;
        script.onload = () => {
            callBack();
        };
        script.onerror = () => {
            throw new Error('Paypal SDK could not be loaded.');
        };

        document.body.appendChild(script);
    };

    // return (
    //     <div>
    //         <div ref={paypal}></div>
    //     </div>
    // );

    return (<>
        <PayPalButton
            options={{
                "client-id": clientID,
                currency: "USD",
                components: "buttons",
                intent: "authorize",
                commit: false,
                "disable-funding": "credit,card"
            }}//ASKubZJSMqA7_0E2HE3yRKIej3xO92wyK6j6PKSfyyDZljGO23sh_xnOyHH7wIYHR2nPSLZjTZiihw6B
            // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
            createOrder={createOrder}
            onApprove={onApprove}
            onError={onError}
            onInit={oninit}
            onSuccess={(details, data) => {
                alert("Transaction completed by " + details.payer.name.given_name);

                // OPTIONAL: Call your server to save the transaction
                //   return fetch("/paypal-transaction-complete", {
                //     method: "post",
                //     body: JSON.stringify({
                //       orderID: data.orderID
                //     })
                //   });
            }}
        />
        <PayPalScriptProvider
            options={{
                "client-id": clientID,
                currency: "USD",
                components: "buttons",
                intent: "authorize",
                commit: false,
                "disable-funding": "credit,card"
            }}
        >
            <PayPalButtons
                //   style={{ layout: "horizontal" }}
                createOrder={createOrder}
                onClick={onClick}
                onShippingChange={onShippingChange}
                onApprove={onApprove}
                onError={onError}
                onInit={oninit}
            />
        </PayPalScriptProvider>

    </>)
}
export default scriptLoader("https://www.paypalobjects.com/api/checkout.js")(
    Example
);
// export default Example;