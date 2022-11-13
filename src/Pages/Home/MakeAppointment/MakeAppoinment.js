import React from "react";
import doctor from './../../../assets/images/doctor.png'
import appoinment from './../../../assets/images/appointment.png'

const MakeAppoinment = () => {
  return (
    <section
        style={
            {
                background: `url(${appoinment})`
            }
        }
        className= 'my-4 lg:mt-20'
    >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row lg:pb-0">
          <img
            src={doctor}
            className="w-1/2 h-fit rounded-lg lg:-mt-36 hidden lg:block "
            alt=""
          />
          <div>
            <h2 className="text-lg text-primary font-bold">Appointment</h2>
            <h2 className="text-3xl lg:text-5xl font-bold text-white">Make an appointment Today</h2>
            <p className="py-6 text-white text-justify">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
            </p>
            <button className="btn bg-gradient-to-r from-primary to-secondary btn-primary text-white">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppoinment;
