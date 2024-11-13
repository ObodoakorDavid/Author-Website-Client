import React from "react";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-[#956B73] text-white items-center rounded-tl-3xl px-4 py-12 flex flex-col gap-8 md:items-start md:flex-row md:gap-8">
      <p className="text-3xl font-semibold w-full md:w-1/3 text-center md:text-start">
        TITILOPE OYEWOLE
      </p>

      <ul className="flex flex-col gap-2 md:w-1/3 text-center">
        <li>
          <Link
            to="/about"
            className="text-xl font-semibold hover:text-gray-200"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="text-xl font-semibold hover:text-gray-200"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/books"
            className="text-xl font-semibold hover:text-gray-200"
          >
            Books for sale
          </Link>
        </li>
      </ul>

      <ul className="flex flex-col gap-2 w-full md:w-1/3 text-center">
        <li className="text-xl font-semibold">Socials</li>
        <li className="flex gap-3 justify-center">
          <a
            href="https://x.com/thegtdipe"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="w-fit"
          >
            <FaXTwitter size={28} />
          </a>
          <a
            href="https://instagram.com/fictionally.feral"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={28} />
          </a>
        </li>
      </ul>
    </div>
  );
}
