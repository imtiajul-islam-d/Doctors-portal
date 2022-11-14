import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, setTreatment, selectedDate }) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const patientName = form.name.value;
    const email = form.email.value;
    const slot = form.slot.value;
    const phone = form.phone.value;
    const booking = {
      appointmentDate: date,
      patient: patientName,
      slot,
      email,
      phone,
      treatment: name,
    };
    // send data to the server and show a toast
    console.log(booking);
    setTreatment(null)
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form action="" onSubmit={handleBooking}>
            <input
              type="text"
              value={date}
              disabled
              required
              className="input w-full border outline outline-1 outline-gray-300 my-3"
            />
            <br />
            <select name="slot" className="select select-bordered w-full">
              {slots &&
                slots.map((slot, ids) => (
                  <option key={ids} value={slot}>
                    {slot}
                  </option>
                ))}
            </select>
            <br />
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="input w-full border outline outline-1 outline-gray-300 my-3"
            />
            <br />
            <input
              type="email"
              name="email"
              required
              placeholder="Email address"
              className="input w-full border outline outline-1 outline-gray-300 my-3"
            />
            <br />
            <input
              type="Phone"
              name="phone"
              required
              placeholder="Phone"
              className="input w-full border outline outline-1 outline-gray-300 my-3"
            />
            <br />
            <input
              type="submit"
              className="w-full btn-accent text-white p-3 cursor-pointer"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
