import React, { useContext, useState } from "react";
import Nav from "./../../Shared/Nav/Nav";
import { format, subDays } from "date-fns";
import { DayPicker } from "react-day-picker";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../context/AuthProvider";
import Loading from "../../Shared/Loading/Loading";
import { Link, Outlet } from "react-router-dom";
import BookingModal from "../../Appointment/BookingModal/BookingModal";
import { itMatchesOne } from "daisyui/src/lib/postcss-prefixer/utils";

const DashBoard = () => {
  const [selected, setSelected] = useState(new Date());
  const date = format(selected, "PP");
  const { user } = useContext(AuthContext);
  const {
    data: myBooking = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myBooking", date, user],
    queryFn: async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/booking/${user.email}?date=${date}`,
          {
            headers: {
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        const data = await res.json();
        return data;
      } catch {}
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <>
      <div className="container mx-auto">
        <div className="w-full">
          <div className="max-w-lg mx-auto flex items-center justify-center">
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
            />
          </div>
          <div className="w-full">
            <div className="overflow-x-auto">
              <h2 className="mb-3 text-2xl font-bold">My Appointments</h2>
              <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Service</th>
                    <th>Time</th>
                    <th>Price</th>
                    <th>Payment Status</th>
                  </tr>
                </thead>
                {/* {myBooking.data.map((booking) => { */}
                <tbody>
                  {myBooking?.data?.length === 0 && <h2>No data found</h2>}
                  {myBooking?.data?.map((item, idx) => {
                    return (
                      <tr key={idx}>
                        <th>{idx + 1}</th>
                        <td>{item.patient}</td>
                        <td>{item.treatment}</td>
                        <td>{item.slot}</td>
                        <td>{`$${item.price}`}</td>
                        <td>
                          {item.price && !item.paid && (
                            <Link to={`/dashboard/payment/${item._id}`}>
                              <button className="btn btn-sm">Pay</button>
                            </Link>
                          )}
                          {item.price && item.paid && <span className="p-3 bg-green-700 text-white">paid</span>}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
