import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 items-center">
      <p className=" text-3xl font-semibold w-3/3 text-start">
        TITILOPE OYEWOLE
      </p>

      <ul className="flex gap-2">
        <Link to="/" className=" font-semibold">
          Home
        </Link>
        <Link to="/about" className=" font-semibold">
          About Titi
        </Link>
        <Link to="/books" className=" font-semibold">
          Books
        </Link>
        <Link to="/contact" className=" font-semibold">
          Contact Us
        </Link>
      </ul>
    </nav>
  );
}
