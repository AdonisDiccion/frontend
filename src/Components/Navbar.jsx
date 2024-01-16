import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4 flex fixed w-full top-0 z-10">
      <Link to="/" className="text-white font-semibold mr-4 flex-1">
        Home
      </Link>
      <div className="flex gap-3 items-center">
        <button className="text-white font-semibold">
          Logout
        </button>

        <Link to="/login">
          <button className="text-white font-semibold">Login</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
