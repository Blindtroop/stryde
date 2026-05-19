import { useState } from "react";
import {
  FaPhone,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/fragrances", label: "Fragrances" },
    { to: "/flavors", label: "Flavors" },
    { to: "/essential-oils", label: "Essential Oils" },
    { to: "/about", label: "About Us" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#222222]">
  <div className="relative flex justify-between items-center px-4 md:px-10 py-4">

    {/* Logo — absolutely centered */}
    <NavLink to="/" className="absolute left-1/2 -translate-x-1/2">
      <h1
        style={{ fontFamily: "Nevera" }}
        className="text-4xl text-[#89E900]"
      >
        STRYDE
      </h1>
    </NavLink>

        {/* Hamburger — always visible */}
        <div
          className="text-2xl cursor-pointer text-[#89E900]"
          onClick={() => setOpen(true)}
        >
          <FaBars />
        </div>
      </div>

      {/* Fullscreen Menu */}
      <div
        className={`fixed inset-0 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center gap-10 text-[#1e6c9d] text-2xl transition-all duration-500 z-50 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Close button */}
        <button
          className="absolute top-5 right-5 text-3xl text-[#1e6c9d]"
          onClick={() => setOpen(false)}
        >
          <FaTimes />
        </button>

        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            onClick={() => setOpen(false)}
            className="relative group pb-1"
          >
            {({ isActive }) => (
              <>
                <span className={isActive ? "text-[#1e6c9d]" : "hover:text-gray-700"}>
                  {link.label}
                </span>
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-[#1e6c9d] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </>
            )}
          </NavLink>
        ))}

        {/* Shopping Button */}
        <NavLink
          to="/shop"
          onClick={() => setOpen(false)}
          className="bg-[#1e6c9d] text-white px-6 py-3 rounded-full flex items-center gap-3"
        >
          <FaShoppingCart />
          Start Shopping
        </NavLink>

        {/* Contact Button */}
        <Link
          to="/contact"
          onClick={() => setOpen(false)}
          className="bg-[#1e6c9d] text-white px-6 py-3 rounded-full flex items-center gap-3"
        >
          <FaPhone />
          Call Us
        </Link>
      </div>
    </nav>
  );
}