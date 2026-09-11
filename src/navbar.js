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

export default Navbar;

