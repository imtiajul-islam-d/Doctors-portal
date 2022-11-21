import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
// import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js'

const CheckoutForm = ({ booking }) => {
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [cardError, setCardError] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const { price, email, patient, _id } = booking;
  //   call api for payment intent
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);
  // payment api
  const handleSubmit = async (event) => {
    event.preventDefault();
    setCardError("");
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("[PaymentMethod]", paymentMethod);
    }
    setSuccess("");
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: patient,
            email: email,
          },
        },
      });
    if (confirmError) {
      setCardError(confirmError.message);
      return;
    } else {
      if (paymentIntent.status === "succeeded") {
        console.log(card, "cardInfo");
        const payment = {
          price,
          transactionId: paymentIntent.id,
          email,
          bookingId: _id
        };
        fetch(`http://localhost:5000/payments`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `bearer ${localStorage.getItem("accesstoken")}`,
          },
          body: JSON.stringify(payment),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            if (data.insertedId) {
              setSuccess("Your payment successfully completed");
              setTransactionId(paymentIntent.id);
              toast.success("Payment successfully completed");
            }
          });
      }
    }
    setProcessing(false);
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn btn-primary mt-3"
        type="submit"
        disabled={!stripe || !clientSecret || processing}
      >
        Pay
      </button>
      {cardError && <p className="text-red-600">{cardError}</p>}
      {success && (
        <div>
          <p className="text-green-500">Payment Completed!</p>
          <p>Your transaction id: {transactionId}</p>
        </div>
      )}
    </form>
  );
};

export default CheckoutForm;
