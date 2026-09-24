import React from "react";
import Contact from "./contact";
import Footer from "./footer";
import Messages from "./messages";
import Navbar from "./navbar";
import PublicContent from "./content";
import Visit from "./visit";

const Page = ({ children }) => (
  <div className="site-shell inner-page page-transition min-h-screen">
    <Navbar />
    {children}
    <Footer />
  </div>
);

const aboutValues = ["Faith", "Love", "Excellence", "Integrity"];

const pastors = [
  ["Rev. John Oliver, PHD", "Lead Pastor", "Powerbase Ministry International"],
];

export const AboutPage = () => (
  <Page>
    <section className="inner-page-content about-route pb-20">
      <div className="max-w-6xl mx-auto px-6 space-y-20">
        <section className="page-heading">
          <p className="eyebrow text-[var(--royal-blue)]">01 · Who we are</p>
          <h1>About Powerbase Ministry International</h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">Powerbase Ministry International is a Christ-centered church committed to raising believers who walk in power, purpose, and love through the Word of God.</p>
        </section>

        <section className="grid md:grid-cols-2 gap-10">
          <article className="editorial-panel">
            <img src={`${process.env.PUBLIC_URL}/powerbase-logo.jpg`} alt="Our Mission" className="w-24 h-24 object-cover rounded-full mx-auto mb-5" />
            <h2 className="text-2xl font-bold text-[var(--royal-blue)] group-hover:text-white transition mb-4">Our Mission</h2>
            <p className="text-gray-700 group-hover:text-white transition-colors duration-300 leading-relaxed">Powerbase Ministry International nurtures faith, inspires pursuit of God&apos;s will and purpose, and fosters a Kingdom territory mindset that empowers citizens to discover, recover, and shape their destinies.</p>
          </article>
          <article className="editorial-panel">
            <img src={`${process.env.PUBLIC_URL}/powerbase-logo.jpg`} alt="Our Vision" className="w-24 h-24 object-cover rounded-full mx-auto mb-5" />
            <h2 className="text-2xl font-bold text-[var(--royal-blue)] group-hover:text-white transition mb-4">Our Vision</h2>
            <p className="text-gray-700 group-hover:text-white transition-colors duration-300 font-medium">To Discover, Recover, and Shape Destinies, re-positioning them for greater opportunities.</p>
          </article>
        </section>

        <section>
          <p className="eyebrow text-[var(--royal-blue)] text-center">02 · Our foundation</p>
          <h2 className="text-3xl font-bold text-center text-[var(--royal-blue)] mb-10">The values that guide us.</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {aboutValues.map((value) => (
              <article key={value} className="value-panel">
                <img src={`${process.env.PUBLIC_URL}/powerbase-logo.jpg`} alt={value} className="w-20 h-20 object-cover rounded-full mx-auto mb-4" />
                <h3 className="font-semibold text-lg group-hover:text-[var(--royal-blue)] transition">{value}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="pastor-panel">
          <p className="eyebrow text-[var(--royal-blue)] text-center">03 · Leadership</p>
          <h2 className="text-3xl font-bold text-[var(--royal-blue)] mb-12 text-center">Meet the lead pastor.</h2>
          <div className="grid grid-cols-1 gap-12">
            {pastors.map(([name, role, branch]) => (
              <article key={name} className="text-center">
                <img src={`${process.env.PUBLIC_URL}/powerbase-logo.jpg`} alt={name} className="w-48 h-48 rounded-full object-cover mx-auto mb-4 shadow-lg" />
                <h3 className="text-2xl font-semibold text-[var(--royal-blue)]">{name}</h3>
                <p className="text-gray-700">{role}</p>
                <p className="text-sm text-gray-500">{branch}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  </Page>
);

export const EventsPage = () => (
  <Page>
    <div className="page-hero">
      <p className="eyebrow">02 · Gather with us</p>
      <h1>Events</h1>
      <p className="mt-4 text-lg">Join us for worship, teaching, prayer, and transformation.</p>
    </div>
    <Messages />
    <PublicContent />
  </Page>
);

export const ContactPage = () => (
  <Page>
    <div className="route-intro"><p className="eyebrow">06 · Stay connected</p><h1>Enquiries &amp; prayer requests.</h1></div>
    <Contact />
  </Page>
);

export const VisitPage = () => (
  <Page>
    <div className="route-intro"><p className="eyebrow">07 · Come as you are</p><h1>Plan a visit.</h1></div>
    <Visit />
  </Page>
);