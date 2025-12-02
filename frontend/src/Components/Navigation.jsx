import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
function Navigation() {
  const navigate = useNavigate();

  return (
    <header className="flex justify-between items-center top-0 h-20 z-1000 bg-[#CF4B00] text-white">
      <div className="text-3xl font-bold ml-6 p-0">
        <h1 className="cursor-pointer" onClick={() => navigate("/")}>
          PetGalore
        </h1>
      </div>
      <nav className="hidden md:flex space-x-6 text-lg font-medium">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-white font-bold" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "text-white font-bold" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "text-white font-bold" : "")}
        >
          Contact
        </NavLink>
      </nav>
      <div className="mr-6 p-0">
        <button
          className="border border-2 rounded-md px-4 py-2 font-bold"
          onClick={() => navigate("/signup")}
        >
          Sign In
        </button>
      </div>
    </header>
  );
}

export default Navigation;
