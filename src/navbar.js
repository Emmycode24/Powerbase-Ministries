import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <a href={process.env.PUBLIC_URL || "/"} className="brand-lockup">
          <img src={`${process.env.PUBLIC_URL}/powerbase-logo.jpg`} alt="Powerbase Ministries" className="brand-mark" />
          <span><strong>Powerbase</strong><small>Ministry International</small></span>
        </a>

        <div className="desktop-menu">
          <a href={process.env.PUBLIC_URL || "/"}>Home</a>
          <a href={`${process.env.PUBLIC_URL}/#/about`}>About</a>
          <a href={`${process.env.PUBLIC_URL}/#/events`}>Events</a>
          <a href={`${process.env.PUBLIC_URL}/#/contact`}>Contact</a>
          <a href={`${process.env.PUBLIC_URL}/#/visit`} className="nav-cta">Plan a Visit <span>↗</span></a>
        </div>

        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span></span><span></span>
        </button>
      </div>

      {isOpen && (
        <div className="mobile-menu">
          <div>
            <a href={process.env.PUBLIC_URL || "/"} onClick={() => setIsOpen(false)}>Home</a>
            <a href={`${process.env.PUBLIC_URL}/#/about`} onClick={() => setIsOpen(false)}>About</a>
            <a href={`${process.env.PUBLIC_URL}/#/events`} onClick={() => setIsOpen(false)}>Events</a>
            <a href={`${process.env.PUBLIC_URL}/#/contact`} onClick={() => setIsOpen(false)}>Contact</a>
            <a href={`${process.env.PUBLIC_URL}/#/visit`} onClick={() => setIsOpen(false)} className="nav-cta">Plan a Visit <span>↗</span></a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

