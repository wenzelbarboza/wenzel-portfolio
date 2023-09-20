"use client";
import React, { useState } from "react";

const Nav: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="shadow-bottom p-4 md:flex md:justify-between w-full fixed bg-white z-10">
      <div className="flex items-center justify-between">
        <div className=" text-xl font-bold text-blue-600">WENZEL BARBOZA</div>
        <div className="md:hidden">
          <button className=" text-xl text-blue-600" onClick={toggleMenu}>
            Menu
          </button>
        </div>
      </div>
      <div
        className={`md:flex md:items-center ${menuOpen ? "block" : "hidden"}`}
      >
        <ul className="md:flex md:space-x-4 ">
          <li className="text-blue-600 font-bold">Home</li>
          <li className="text-blue-600 font-bold">About</li>
          <li className="text-blue-600 font-bold">Services</li>
          <li className="text-blue-600 font-bold">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
