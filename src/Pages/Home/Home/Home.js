import React from "react";
import Features from "../Features/Features";
import MakeAppoinment from "../MakeAppointment/MakeAppoinment";
import Service from "../Service/Service";
import bg from "./../../../assets/images/bg.png";
import chair from "./../../../assets/images/chair.png";

const Home = () => {
  return (
    <>
      <div className="overflow-hidden lg:min-h-[90vh] relative flex justify-center items-center">
        <img className="absolute top-0 left-0 h-full w-full" src={bg} alt="" />
        <div>
          <div className="hero bg-base-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img
                src={chair}
                className="rounded-lg shadow-2xl lg:w-1/2"
                alt=""
              />
              <div>
                <h1 className="text-5xl font-bold">
                  Your New Smile Starts Here
                </h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn bg-gradient-to-r from-primary to-secondary text-white btn-primary ">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Features></Features>
      <Service></Service>
      <MakeAppoinment></MakeAppoinment>
    </>
  );
};

export default Home;
