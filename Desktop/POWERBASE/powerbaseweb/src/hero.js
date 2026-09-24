import React from "react";

const Hero = () => {
  return (
    <div
      className="hero-template"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/purplebg2.jpg)` }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="eyebrow">Founded on faith · built for purpose</p>
        <h1>Discover.<br /><em>Recover.</em><br />Shape Destinies.</h1>
        <p className="hero-intro">Powerbase Ministry International nurtures faith, inspires pursuit of God&apos;s will and purpose, and empowers citizens to discover, recover, and shape their destinies.</p>
        <div className="hero-actions">
          <a href={`${process.env.PUBLIC_URL}/#/visit`} className="button button-gold">Join Us This Sunday <span>↗</span></a>
          <a href="#about" className="text-link">Our story <span>↓</span></a>
        </div>
      </div>
      <div className="hero-stats"><span>POWERBASE MINISTRY INTERNATIONAL</span><span>DISCOVER · RECOVER · SHAPE</span></div>
      <div className="hero-stamp">POWERBASE<br /><span>MINISTRY INTERNATIONAL</span></div>
      <a href="#about" className="hero-scroll-cue" aria-label="Scroll to our foundation"><span></span>Scroll to explore</a>
    </div>
  );
};

export default Hero;
