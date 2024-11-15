import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={navbarRef}
      className="flex justify-between p-4 items-center border-b border-gray-400"
    >
      <p className="text-3xl font-semibold">G.T.DÍPÈ</p>

      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? (
            <HiOutlineX className="text-3xl" />
          ) : (
            <HiOutlineMenu className="text-3xl" />
          )}
        </button>
      </div>

      <ul className="hidden md:flex gap-4 items-center">
        <li className="relative group">
          <Link to="/" className="font-semibold">
            Home
          </Link>
          <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-black transition-all duration-300 ease-in-out transform -translate-x-1/2 group-hover:w-full"></span>
        </li>
        <li className="relative group">
          <Link to="/about" className="font-semibold">
            About G.T
          </Link>
          <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-black transition-all duration-300 ease-in-out transform -translate-x-1/2 group-hover:w-full"></span>
        </li>
        <li className="relative group">
          <Link to="/books" className="font-semibold">
            Books
          </Link>
          <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-black transition-all duration-300 ease-in-out transform -translate-x-1/2 group-hover:w-full"></span>
        </li>
        <li className="relative group">
          <Link to="/games" className="font-semibold">
            Games
          </Link>
          <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-black transition-all duration-300 ease-in-out transform -translate-x-1/2 group-hover:w-full"></span>
        </li>
        <li className="relative group">
          <Link to="/contact" className="font-semibold">
            Contact Me
          </Link>
          <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-black transition-all duration-300 ease-in-out transform -translate-x-1/2 group-hover:w-full"></span>
        </li>
      </ul>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden flex flex-col gap-2 absolute top-14 left-0 w-full bg-white z-10 p-4"
          >
            <li>
              <Link to="/" className="font-semibold" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="font-semibold" onClick={toggleMenu}>
                About G.T
              </Link>
            </li>
            <li>
              <Link to="/books" className="font-semibold" onClick={toggleMenu}>
                Books
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="font-semibold"
                onClick={toggleMenu}
              >
                Contact Me
              </Link>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
