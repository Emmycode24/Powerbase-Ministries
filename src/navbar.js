<<<<<<< HEAD
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="relative w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <a href="/" className="flex items-center gap-3 text-xl font-bold text-purple-900">
          <img src="/powerbase-logo.jpg" alt="Powerbase Ministries" className="w-10 h-10 object-cover rounded" />
          <span>Powerbase Ministry<br />International</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <a href="/" className="hover:text-purple-800">Home</a>
          <a href="/about" className="hover:text-purple-800">About</a>
          <a href="/events" className="hover:text-purple-800">Events</a>
          <a href="/contact" className="hover:text-purple-800">Contact</a>
          <a href="/visit" className="rounded-full bg-purple-800 text-white px-5 py-3 hover:bg-purple-900">Plan a Visit</a>
        </div>

        

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-800 hover:bg-gray-100"
          onClick={toggleMenu}
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <div className="flex flex-col px-6 py-4 space-y-4 text-gray-800 font-medium">
            <a href="/" onClick={() => setIsOpen(false)}>Home</a>
            <a href="/about" onClick={() => setIsOpen(false)}>About</a>
            <a href="/events" onClick={() => setIsOpen(false)}>Events</a>
            <a href="/contact" onClick={() => setIsOpen(false)}>Contact</a>
            <a href="/visit" onClick={() => setIsOpen(false)}>Plan a Visit</a>
          </div>
        </div>
      )}
    </nav>
  );
};

=======
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import logo from "./pb logo - Copy.jpg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Events", path: "/events" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Powerbase Ministries"
              className="h-10 w-auto object-contain"
            />
            <span className="hidden sm:block font-bold text-lg text-[var(--purple)]">
              Powerbase Ministry International
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-6 font-medium">
            {navLinks.map(({ name, path }) => (
              <NavLink
                key={name}
                to={path}
                className={({ isActive }) =>
                  `transition ${
                    isActive
                      ? "text-[var(--purple)] font-semibold"
                      : "text-gray-700 hover:text-[var(--purple)]"
                  }`
                }
              >
                {name}
              </NavLink>
            ))}

            {/* CTA */}
            <Link
              to="/contact"
              className="bg-[var(--purple)] text-white px-4 py-2 rounded-full hover:opacity-90 transition"
            >
              Plan a Visit
            </Link>

            {/* ADMIN (small + discreet) */}
            <NavLink
              to="/admin"
              className="text-xs text-gray-400 hover:text-[var(--purple)]"
            >
              Admin
            </NavLink>
          </div>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-3xl focus:outline-none"
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* OVERLAY */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 border-b flex justify-between items-center">
          <img src={logo} alt="Logo" className="h-8 object-contain" />
          <button
            onClick={() => setOpen(false)}
            className="text-2xl"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col p-6 space-y-5 text-lg font-medium">
          {navLinks.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-[var(--purple)] font-semibold"
                  : "text-gray-700"
              }
            >
              {name}
            </NavLink>
          ))}

          {/* Mobile Admin */}
          <NavLink
            to="/admin"
            onClick={() => setOpen(false)}
            className="text-sm text-gray-400 pt-6 border-t"
          >
            Admin Dashboard
          </NavLink>
        </nav>
      </div>
    </>
  );
};

Navbar.propTypes = {};
>>>>>>> 583d53d57011b56a51b5fb0e108698aa7ea9b18b
export default Navbar;

