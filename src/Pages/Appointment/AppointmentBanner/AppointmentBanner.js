import React, { useState } from "react";
import bg from "../../../assets/images/bg.png";
import chair from "../../../assets/images/chair.png";
import { DayPicker } from 'react-day-picker';
// import { format } from 'date-fns';

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
    
  return (
    <header>
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
              <div className="lg:w-1/2 flex justify-center items-center">
                <DayPicker
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                >
                </DayPicker>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
