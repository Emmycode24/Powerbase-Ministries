import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./pb logo - Copy.jpg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Powerbase Ministries"
              className="h-10 w-auto"
            />
            <span className="hidden sm:block font-bold text-lg text-[var(--purple)]">
              Powerbase Ministries
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/events">Events</Link>
            <Link to="/contact">Contact</Link>
            <Link
              to="/"
              className="bg-[var(--purple)] text-white px-4 py-2 rounded"
            >
              Plan a Visit
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-3xl"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 border-b flex justify-between items-center">
          <img src={logo} alt="Logo" className="h-8" />
          <button onClick={() => setOpen(false)} className="text-2xl">✕</button>
        </div>

        <nav className="flex flex-col p-6 space-y-4">
          {["Home", "About", "Events", "Contact"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;

