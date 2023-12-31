import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../ContextApi/ContextApi";
import Swal from "sweetalert2";

const Navbar = () => {
  const { LogOut, user } = useContext(AuthContext);

  const handleSingOut = () => {
    LogOut()
      .then((result) => {
        console.log(result);
        if (result) {
          Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // console.log(user)

  const navbar = (
    <>
      <Link to="/" className="btn btn-outline btn-primary btn-sm mr-2">
        Home
      </Link>
      {user && (
        <Link
          to="/dashboard"
          className="btn btn-outline btn-primary btn-sm mr-2"
        >
          Dashboard
        </Link>
      )}
      {
        !user &&  <Link to="/login" className="btn btn-outline btn-primary btn-sm">
        Login
      </Link>
      }
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 border rounded-t-3xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navbar}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            Task<span className="text-blue-500">Harbor</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navbar}</ul>
        </div>
        <div className="navbar-end"></div>
        {
          user && <>
          <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-20 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={user.photoURL}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={handleSingOut}>
              <a>Logout</a>
            </li>
          </ul>
        </div>
          </>
        }
      </div>
    </div>
  );
};

export default Navbar;
