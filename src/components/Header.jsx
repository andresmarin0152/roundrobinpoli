import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-red-500 p-6 px-12 shadow-md rounded-b-lg">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <NavLink
          to="/"
          className="font-semibold text-xl tracking-tight text-white"
        >
          Round Robin
        </NavLink>
      </div>
      <div className="w-full lg:flex lg:items-center lg:w-auto gap-5">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-md tracking-tight text-white border-b-2 border-white transition duration-500 ease-in-out hover:border-white"
              : "font-ligth text-md tracking-tight text-white transition duration-500 ease-in-out hover:border-white"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          end
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-md tracking-tight text-white border-b-2 border-white transition duration-500 ease-in-out hover:border-white"
              : "font-ligth text-md tracking-tight text-white transition duration-500 ease-in-out hover:border-white"
          }
        >
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
