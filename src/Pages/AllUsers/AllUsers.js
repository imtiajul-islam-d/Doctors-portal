import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";

const AllUsers = () => {
  const { data: users = [], isLoading, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/allusers`);
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
//   make admin
const handleMakeAdmin = id => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
        method: "PUT",
        headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res => res.json())
    .then(data => {
        if(data.message === 'forbidden access'){
            toast.error("You do not have the access to make an admin")
        }
        if(data.modifiedCount > 0){
            toast.success("Admin added")
            refetch()
        }
    })
}
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Admin</th>
              <th>Delete user</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {users.map((user, idx) => {
              return (
                <tr key={user._id}>
                  <th>{idx + 1}</th>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>
                    {
                        user.role !== 'admin' ? 
                        <Link className="btn btn-primary" onClick={() => handleMakeAdmin(user._id)}>Make Admin</Link>
                        :
                        <Link className="btn bg-red-700 text-white">Remove admin</Link>
                    }
                  </td>
                  <td>
                    <Link className="btn bg-red-700 text-white">
                      Delete user
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
