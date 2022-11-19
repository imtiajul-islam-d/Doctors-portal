import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../../Shared/ConfirmationModal/ConfirmationModal";
import Loading from "../../../Shared/Loading/Loading";

const ManageDoctors = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);
  const {
    data: doctors = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch(`http://localhost:5000/doctors`, {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });
  const handleDeleteDoctor = (doctor) => {
    fetch(`http://localhost:5000/doctors/${doctor._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.deletedCount > 0) {
          toast.success(`${doctor.name} deleted successfully`)
          refetch();
        }
      });
  };
  console.log(doctors);
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <h2 className="mb-3 text-2xl font-bold">Manage Doctors</h2>
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Specialty</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          {/* {myBooking.data.map((booking) => { */}
          <tbody>
            {doctors?.length === 0 && <h2>No data found</h2>}
            {doctors?.map((item, idx) => {
              return (
                <tr key={idx}>
                  <th>{idx + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.specialty}</td>
                  <td>
                    <div className="avatar">
                      <div className="w-24 rounded">
                        <img src={item.image} alt="" />
                      </div>
                    </div>
                  </td>
                  <td>
                    <label
                      onClick={() => setDeletingDoctor(item)}
                      htmlFor="confirmation-modal"
                      className="btn btn-error"
                    >
                      Delete
                    </label>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {deletingDoctor && (
          <ConfirmationModal
            title={`Are you sure you want to delete ${deletingDoctor.name}?`}
            message={"Once you delete it cannot be undone"}
            successAction={handleDeleteDoctor}
            deletingDoctor={deletingDoctor}
            setDeletingDoctor={setDeletingDoctor}
          ></ConfirmationModal>
        )}
      </div>
    </div>
  );
};

export default ManageDoctors;
