import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="absolute w-full p-4 flex item-center justify-between z-50">
      <Link to={"/"}>
        <h1 className="upeerCase text-red-500 h-10 text-3xl">Netflix</h1>
      </Link>
      <div>
        <Link to={"/login"}>
            <button className="capitalize pr-4 ">Login</button>
        </Link>
        <Link to={"/signup"}>
            <button className="capitalize bg-red-600 px-6 py-2 rounded cursor-pointer">Signup</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
