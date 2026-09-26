import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`site-nav${isScrolled ? " is-scrolled" : ""}`}>
      <div className="nav-inner">
        <a href={process.env.PUBLIC_URL || "/"} className="brand-lockup">
          <img src={`${process.env.PUBLIC_URL}/powerbase-logo.jpg`} alt="Powerbase Ministry International" className="brand-mark" />
          <span><strong>POWERBASE</strong><small>MINISTRY INTERNATIONAL</small></span>
        </a>

        <div className="desktop-menu">
          <a href={process.env.PUBLIC_URL || "/"}>Home</a>
          <a href={`${process.env.PUBLIC_URL}/#/about`}>About</a>
          <a href={`${process.env.PUBLIC_URL}/#/events`}>Events</a>
          <a href={`${process.env.PUBLIC_URL}/#/giving`}>Donation</a>
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
            <a href={`${process.env.PUBLIC_URL}/#/giving`} onClick={() => setIsOpen(false)}>Donation</a>
            <a href={`${process.env.PUBLIC_URL}/#/contact`} onClick={() => setIsOpen(false)}>Contact</a>
            <a href={`${process.env.PUBLIC_URL}/#/visit`} onClick={() => setIsOpen(false)} className="nav-cta">Plan a Visit <span>↗</span></a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

