import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img src={`${process.env.PUBLIC_URL}/powerbase-logo.jpg`} alt="About Powerbase Ministries" className="w-full max-w-md mx-auto rounded-2xl shadow-lg" />
        <div>
          <h2 className="text-4xl font-bold text-[var(--royal-blue-dark)] mb-6">Our Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">At Powerbase Ministry International, we are committed to nurturing faith, inspiring purpose, and fostering a community that uplifts everyone,by <b>DISCOVERING</b>, <b>RECOVERING</b> and <b>SHAPING DESTINIES</b> Of People around Us. Join us in our journey to empower lives and build a strong foundation in Christ.</p>
          <p className="text-gray-700 text-lg leading-relaxed">From weekly services to special vigils, our church provides opportunities to grow spiritually, connect with others, and make a difference in the world.</p>
          <a href={`${process.env.PUBLIC_URL}/#/about`} className="inline-block mt-6 font-semibold text-[var(--royal-blue)] hover:text-[var(--royal-blue-dark)]">Learn More About Us →</a>
        </div>
      </div>
    </section>
  );
};

export default About;
