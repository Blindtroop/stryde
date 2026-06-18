import { useState } from "react";
import { FaPhone, FaBars, FaTimes } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { NavLink, Link } from "react-router-dom";

export default function Navbar({ bagCount = 0 }) {
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/fragrances", label: "Mens" },
    { to: "/flavors", label: "Women" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#222222]">
      <div className="relative flex justify-between items-center px-4 md:px-10 py-4">

        {/* Hamburger — left */}
        <div
          className="text-2xl cursor-pointer text-[#89E900]"
          onClick={() => setOpen(true)}
        >
          <FaBars />
        </div>

        {/* Logo — absolutely centered */}
        <NavLink to="/" className="absolute left-1/2 -translate-x-1/2">
          <h1
            style={{ fontFamily: "Nevera" }}
            className="text-4xl text-[#89E900]"
          >
            STRYDE
          </h1>
        </NavLink>

        {/* Bag button — right, links to /shop */}
        <Link to="/shop">
          <button className="hidden md:flex items-center gap-3 bg-[#222222] border border-[#89E900] text-[#89E900] px-6 py-3 rounded-full">
            <FaBagShopping />
            Your Bag
            <span className="bg-[#89E900] text-[#111] text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {bagCount}
            </span>
          </button>
        </Link>

      </div>

      {/* Fullscreen Menu */}
      <div
        className={`fixed inset-0 bg-[#222222] backdrop-blur-md flex flex-col items-center justify-center gap-10 text-[#89E900] text-2xl transition-all duration-500 z-50 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <button
          className="absolute top-5 right-5 text-3xl text-[#89E900]"
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
                <span className={isActive ? "text-[#89E900]" : "hover:text-[#89E900]"}>
                  {link.label}
                </span>
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-[#89E900] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </>
            )}
          </NavLink>
        ))}

        {/* Start Shopping — goes to /shop */}
        <Link
          to="/shop"
          onClick={() => setOpen(false)}
          className="bg-[#89E900] text-[#222222] px-6 py-3 rounded-full flex items-center gap-3"
        >
          <FaBagShopping />
          Start Shopping
        </Link>

      </div>
    </nav>
  );
}