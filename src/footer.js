import React from "react";

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-main">
      <div><p className="eyebrow">Powerbase Ministry International</p><h2>Faith that moves.<br /><em>Love that remains.</em></h2></div>
      <div className="footer-contact"><p className="footer-label">Get in touch</p><p>info@powerbaseministryinternational@gmail.com</p><p>+234 803 726 1478</p><p>16, Olofuntuyi Street, Baruwa Inside, Ipaja, Lagos State</p></div>
      <div className="footer-links"><p className="footer-label">Navigate</p><a href={`${process.env.PUBLIC_URL}/#/about`}>About Us ↗</a><a href={`${process.env.PUBLIC_URL}/#/events`}>Events ↗</a><a href={`${process.env.PUBLIC_URL}/#/contact`}>Contact ↗</a></div>
    </div>
    <div className="footer-bottom"><span>© 2026 Powerbase Ministry International</span><span>Discover · Recover · Shape</span></div>
  </footer>
);

export default Footer;