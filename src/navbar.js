import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        <a href={process.env.PUBLIC_URL || "/"} className="flex items-center gap-3 text-xl font-bold text-[var(--royal-blue-dark)]">
          <img src={`${process.env.PUBLIC_URL}/powerbase-logo.jpg`} alt="Powerbase Ministries" className="w-10 h-10 object-cover rounded" />
          <span>Powerbase Ministry<br />International</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-7 text-gray-700 font-medium text-sm">
          <a href={process.env.PUBLIC_URL || "/"} className="hover:text-[var(--royal-blue)]">Home</a>
          <a href={`${process.env.PUBLIC_URL}/#/about`} className="hover:text-[var(--royal-blue)]">About</a>
          <a href={`${process.env.PUBLIC_URL}/#/events`} className="hover:text-[var(--royal-blue)]">Events</a>
          <a href={`${process.env.PUBLIC_URL}/#/contact`} className="hover:text-[var(--royal-blue)]">Contact</a>
          <a href={`${process.env.PUBLIC_URL}/#/visit`} className="rounded-full bg-[var(--gold)] text-[var(--royal-blue-dark)] px-5 py-2.5 hover:bg-amber-300">Plan a Visit</a>
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
            <a href={process.env.PUBLIC_URL || "/"} onClick={() => setIsOpen(false)}>Home</a>
            <a href={`${process.env.PUBLIC_URL}/#/about`} onClick={() => setIsOpen(false)}>About</a>
            <a href={`${process.env.PUBLIC_URL}/#/events`} onClick={() => setIsOpen(false)}>Events</a>
            <a href={`${process.env.PUBLIC_URL}/#/contact`} onClick={() => setIsOpen(false)}>Contact</a>
            <a href={`${process.env.PUBLIC_URL}/#/visit`} onClick={() => setIsOpen(false)}>Plan a Visit</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

