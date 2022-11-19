import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import Nav from "../Pages/Shared/Nav/Nav";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  console.log(isAdmin)
  return (
    <div>
      <Nav></Nav>
      {/* layout */}
      <div className="drawer drawer-mobile ">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col container mx-auto">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-full lg:w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard">My Appointment</Link>
            </li>
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/allusers">All users</Link>
                </li>
                <li>
                  <Link to="/dashboard/adddoctor">Add Doctors</Link>
                </li>
                <li>
                  <Link to="/dashboard/managedoctors">Manage Doctors</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
