import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "../BookingModal/BookingModal";
import AppointmentOption from "./AppointmentOption";

const AvailableAppointments = ({ selectedDate }) => {
  const [appointmentOption, setAppointmentOption] = useState([]);
  const [treatment, setTreatment] = useState(null);
  useEffect(() => {
    fetch("appointmentOptions.json")
      .then((res) => res.json())
      .then((data) => setAppointmentOption(data));
  }, [selectedDate]);
  return (
    <section className="my-4 container mx-auto">
      <p className="text-center text-primary font-bold text-2xl">
        Available appointments on: {format(selectedDate, "PP")}
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 p-5 lg:p-0">
        {appointmentOption.map((option) => (
          <AppointmentOption
            key={option._id}
            appointmentOption={option}
            setTreatment={setTreatment}
          />
        ))}
      </div>
      {treatment && (
        <BookingModal
          setTreatment={setTreatment}
          selectedDate={selectedDate}
          treatment={treatment}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointments;
