import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-2">
      <ul className="flex justify-around items-center text-white font-serif">
        <li>
          <Link>
            <img src="/images/Preview.png" className="h-16 w-18 "></img>
          </Link>
        </li>
        <li>
          <Link to="/Home" className="hover:text-red-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/App" className="hover:text-red-300">
            Evidenta
          </Link>
        </li>
        <li>
          <Link to="/About" className="hover:text-red-300">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
