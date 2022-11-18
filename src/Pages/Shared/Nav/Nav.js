import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  const [toggle, setToggle] = useState(false);

  // signOut user start
  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .then((error) => {
        alert(error.message);
      });
  };
  // signOut user start

  const menuItems = (
    <React.Fragment>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link>About</Link>
      </li>
      <li>
        <Link to="/appointment">Appointment</Link>
      </li>
      <li>
        <Link>Reviews</Link>
      </li>
      <li>
        <Link>Contact us</Link>
      </li>
      {user?.uid ? (
        <>
          <li>
            <Link onClick={handleSignOut}>Sign Out</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </>
      ) : (
        ""
      )}
    </React.Fragment>
  );
  return (
    <div className="navbar container mx-auto h-20">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="normal-case text-xl">
          Doctors Portal
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <label htmlFor="dashboard-drawer" tabIndex={1} className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
      {user?.uid ? (
        <div className="navbar-end">
          {user?.photoURL ? (
            <img
              alt=""
              className="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800"
              src={user?.photoURL}
            />
          ) : (
            <img
              alt=""
              className="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800"
              src="https://source.unsplash.com/40x40/?portrait?1"
            />
          )}
        </div>
      ) : (
        <li className="navbar-end">
          <Link to="/login">Login</Link>
        </li>
      )}
    </div>
  );
};

export default Nav;
