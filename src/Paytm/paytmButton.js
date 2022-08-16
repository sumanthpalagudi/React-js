import React, { useEffect, useState } from "react";
const PaytmChecksum = require("./paytmChecksum");
const https = require("https");

export function PaytmButton() {
  const [paymentData, setPaymentData] = useState({
    token: "",
    order: "",
    mid: "",
    amount: "",
  });
  const [loading, setLoading] = useState(false);


  const initialize = () => {
    let orderId = "Order_" + new Date().getTime();
    

    // Sandbox Credentials
    let mid = ""; // Merchant ID
    let mkey = ""; // Merhcant Key
    var paytmParams = {};
    paytmParams.body = {
      requestType: "Payment",
      mid: mid,
      websiteName: "DEFAULT",
      orderId: orderId,
      callbackUrl: ``,//Link to call back after payment
      txnAmount: {
        value: "1",
        currency: "INR",
      },
      userInfo: {
        custId: "1002",
      },
    };
    PaytmChecksum.generateSignature(
      JSON.stringify(paytmParams.body),
      mkey
    ).then(function (checksum) {
      paytmParams.head = {
        signature: checksum,
      };

      var post_data = JSON.stringify(paytmParams);
      console.log(post_data);
      var options = {
        /* for Staging */
        //hostname: "securegw-stage.paytm.in",

        /* for Production */
        hostname: 'securegw.paytm.in',

        port: 443,
        path: `/theia/api/v1/initiateTransaction?mid=${mid}&orderId=${orderId}`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": post_data.length,
        },
      };
      var response = "";
      var post_req = https.request(options, function (post_res) {
        post_res.on("data", function (chunk) {
          response += chunk;
        });
        post_res.on("end", function () {
          console.log("Response: ", response);
          // res.json({data: JSON.parse(response), orderId: orderId, mid: mid, amount: amount});
          setPaymentData({
            ...paymentData,
            token: JSON.parse(response).body.txnToken,
            order: orderId,
            mid: mid,
            amount: '1',
          });
          console.log(paymentData);
        });
      });

      post_req.write(post_data);
      post_req.end();
    });
  };

  const makePayment = () => {
    setLoading(true);
    initialize();
    console.log(paymentData);
    var config = {
      root: "",
      style: {
        bodyBackgroundColor: "#fafafb",
        bodyColor: "",
        themeBackgroundColor: "#0FB8C9",
        themeColor: "#ffffff",
        headerBackgroundColor: "#284055",
        headerColor: "#ffffff",
        errorColor: "",
        successColor: "",
        card: {
          padding: "",
          backgroundColor: "",
        },
      },
      data: {
        orderId: paymentData.order,
        token: paymentData.token,
        tokenType: "TXN_TOKEN",
        amount: paymentData.amount /* update amount */,
      },
      payMode: {
        labels: {},
        filter: {
          exclude: [],
        },
        order: ["CC", "DC", "NB", "UPI", "PPBL", "PPI", "BALANCE"],
      },
      website: "WEBSTAGING",
      flow: "DEFAULT",
      merchant: {
        mid: paymentData.mid,
        redirect: true,
      },
      handler: {
        transactionStatus: function transactionStatus(paymentStatus) {
          console.log("paymentStatus => ", paymentStatus);
          setLoading(false);
        },
        notifyMerchant: function notifyMerchant(eventName, data) {
          console.log("Closed");
          setLoading(false);
        },
      },
    };

    if (window.Paytm && window.Paytm.CheckoutJS) {
      console.log(config);
          window.Paytm.CheckoutJS.init(config)
            .then(function onSuccess() {
              console.log("Before JS Checkout invoke");
              // after successfully update configuration invoke checkoutjs
              window.Paytm.CheckoutJS.invoke();
            })
            .catch(function onError(error) {

              console.log("Error => ", error);
            });

    }
  };

  return (
    <div>
      {loading ? (
        <img
          src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
          alt="hsc"
        />
      ) : (
        <button onClick={makePayment}>Pay Now</button>
      )}
    </div>
  );
}
