import React from "react";
import bg from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const ContactUs = () => {
  return (
    <section
      className="min-h-[50vh] p-5"
      style={{
        background: `url(${bg})`,
      }}
    >
      <div className="max-w-md mx-auto">
        <h2 className="text-primary text-center text-2xl">Contact us</h2>
        <h2 className="text-3xl lg:text-4xl text-white text-center mb-3">
          Stay connected with us
        </h2>
        <form action="">
          <input
            className="p-3 outline-none text-gray-500 w-full my-2"
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
          />
          <br />
          <input
            className="p-3 outline-none text-gray-500 w-full my-2"
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
          />
          <br />
          <textarea
            className="outline-none w-full my-2 p-3"
            style={{ resize: "none" }}
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Your message"
          ></textarea>
          <div className="flex justify-center items-center">
            <PrimaryButton>Submit</PrimaryButton>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
