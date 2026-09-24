import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img src={`${process.env.PUBLIC_URL}/powerbase-logo.jpg`} alt="About Powerbase Ministries" className="w-full max-w-md mx-auto rounded-2xl shadow-lg" />
        <div>
          <p className="eyebrow text-[var(--royal-blue)]">01 · Our foundation</p>
          <h2 className="text-4xl font-bold text-[var(--royal-blue-dark)] mb-6">Built on faith. Driven by purpose.</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">Powerbase Ministry International nurtures faith, inspires pursuit of God&apos;s will and purpose, and fosters a Kingdom territory mindset that empowers citizens to discover, recover, and shape their destinies.</p>
          <p className="text-gray-700 text-lg leading-relaxed">From weekly services to special vigils, our church provides opportunities to grow spiritually, connect with others, and make a difference in the world.</p>
          <a href={`${process.env.PUBLIC_URL}/#/about`} className="inline-block mt-6 font-semibold text-[var(--royal-blue)] hover:text-[var(--royal-blue-dark)]">Read our story →</a>
        </div>
      </div>
    </section>
  );
};

export default About;
