import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useNavigation } from "react-day-picker";
import { useLoaderData } from "react-router-dom";
import Loading from "../../../Shared/Loading/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_stripe_public_key);

const Payment = () => {
  const booking = useLoaderData();
  // const navigation = useNavigation();
  // if(navigation.state ==="loading"){
  //   return <Loading></Loading>
  // }
  const { treatment, price, appointmentDate, slot } = booking;
  return (
    <div>
      <h3 className="text-3xl">{`Payment for ${treatment}`}</h3>
      <p>{`Please pay $${price} for your appointment on ${appointmentDate} at ${slot}`}</p>
      <div className="mx-auto max-w-md shadow-lg p-5">
        <Elements stripe={stripePromise}>
          <CheckoutForm
            booking = {booking}
           />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
