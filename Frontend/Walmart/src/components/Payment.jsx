import { PayPalButtons } from '@paypal/react-paypal-js';
import React from 'react'
// const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });
const Payment = () => {
    const createOrder = (data) => {
        // Order is created on the server and the order id is returned
        return fetch("/my-server/create-paypal-order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // use the "body" param to optionally pass additional order information
            // like product skus and quantities
            body: JSON.stringify({
                cart: [
                    {
                        sku: "YOUR_PRODUCT_STOCK_KEEPING_UNIT",
                        quantity: "YOUR_PRODUCT_QUANTITY",
                    },
                ],
            }),
        })
            .then((response) => response.json())
            .then((order) => order.id);
    };
    const onApprove = (data) => {
        // Order is captured on the server and the response is returned to the browser
        return fetch("/my-server/capture-paypal-order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                orderID: data.orderID
            })
        })
            .then((response) => response.json());
    };
    return (
        <PayPalButtons
            createOrder={(data) => createOrder(data, actions)}
            onApprove={(data) => onApprove(data, actions)}
        />
    );
}

export default Payment