import React from "react";

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-main">
      <div><p className="eyebrow">Powerbase Ministry International</p><h2>Faith that moves.<br /><em>Love that remains.</em></h2></div>
      <div className="footer-contact"><p className="footer-label">Get in touch</p><p><a href="mailto:powerbaseministry6@gmail.com">powerbaseministry6@gmail.com</a></p><p><a href="tel:+2347025005487">+234 702 500 5487</a></p><p>16 AYO-OLOFINTUYI STREET BARUWA, IPAJA LAGOS<br />P.O. BOX 2568</p></div>
      <div className="footer-links"><p className="footer-label">Navigate</p><a href={`${process.env.PUBLIC_URL}/#/about`}>About Us ↗</a><a href={`${process.env.PUBLIC_URL}/#/events`}>Events ↗</a><a href={`${process.env.PUBLIC_URL}/#/contact`}>Contact ↗</a><a href="https://www.youtube.com/" target="_blank" rel="noreferrer">Audio and video messages YouTube ↗</a><a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Video messages Facebook ↗</a><a href="https://www.youtube.com/results?search_query=life+worship" target="_blank" rel="noreferrer">Life worship ↗</a></div>
    </div>
    <div className="footer-bottom"><span>© 2026 Powerbase Ministry International</span><span>Discover · Recover · Shape</span></div>
  </footer>
);

export default Footer;