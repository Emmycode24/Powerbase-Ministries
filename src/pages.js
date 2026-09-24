import React from "react";
import Contact from "./contact";
import Footer from "./footer";
import Messages from "./messages";
import Navbar from "./navbar";
import PublicContent from "./content";
import Visit from "./visit";

const Page = ({ children }) => (
  <div className="site-shell inner-page min-h-screen">
    <Navbar />
    {children}
    <Footer />
  </div>
);

const aboutValues = ["Faith", "Love", "Excellence", "Integrity"];

const pastors = [
  ["REV. Dr John Chinedu Oliver", "SETMAN", "HEAD-QUARTERS"],
  ["REV. Priestley Abrahams", "Lead Pastor", "Ishefun Branch"],
  ["Pastor Augustine Chinomso", "Branch Pastor", "Baruwa Branch"],
  ["REV. Charity Richards", "Pastor", "Baruwa Branch"],
];

export const AboutPage = () => (
  <Page>
    <section className="pt-32 pb-20 bg-[var(--gold-light)]">
      <div className="max-w-6xl mx-auto px-6 space-y-20">
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--royal-blue-dark)] mb-6">About Powerbase Ministry International</h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">Powerbase Ministry International is a Christ-centered church committed to raising believers who walk in power, purpose, and love through the Word of God.</p>
        </section>

        <section className="grid md:grid-cols-2 gap-10">
          <article className="group bg-white rounded-xl p-8 shadow hover:shadow-lg hover:bg-[var(--royal-blue)] transition cursor-pointer">
            <img src={`${process.env.PUBLIC_URL}/powerbase-logo.jpg`} alt="Our Mission" className="w-24 h-24 object-cover rounded-full mx-auto mb-5" />
            <h2 className="text-2xl font-bold text-[var(--royal-blue)] group-hover:text-white transition mb-4">Our Mission</h2>
            <p className="text-gray-700 group-hover:text-white transition-colors duration-300 leading-relaxed">As we praise and worship in spirit and truth, Thoroughly Empowered by the Holy Spirit, based on the total, holy, infallible Word of God as united force to fight corruption in our society and  to take our world for Jesus. Powerbase is where DESTINIES are DICCOVERED, RECOVERED and SHAPED, and true worshippers of the living God are developed for God alone.</p>
          </article>
          <article className="group bg-white rounded-xl p-8 shadow hover:shadow-lg hover:bg-[var(--royal-blue)] transition cursor-pointer">
            <img src={`${process.env.PUBLIC_URL}/powerbase-logo.jpg`} alt="Our Vision" className="w-24 h-24 object-cover rounded-full mx-auto mb-5" />
            <h2 className="text-2xl font-bold text-[var(--royal-blue)] group-hover:text-white transition mb-4">Our Vision</h2>
            <p className="text-gray-700 group-hover:text-white transition-colors duration-300 font-medium">To Discover, Recover, and Shape Destinies, re-positioning them for greater opportunities.</p>
          </article>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-center text-[var(--royal-blue)] mb-10">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {aboutValues.map((value) => (
              <article key={value} className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition group cursor-pointer">
                <img src={`${process.env.PUBLIC_URL}/powerbase-logo.jpg`} alt={value} className="w-20 h-20 object-cover rounded-full mx-auto mb-4" />
                <h3 className="font-semibold text-lg group-hover:text-[var(--royal-blue)] transition">{value}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-xl p-10 shadow">
          <h2 className="text-3xl font-bold text-[var(--royal-blue)] mb-12 text-center">Meet Our Pastors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            {pastors.map(([name, role, branch]) => (
              <article key={name} className="text-center bg-white rounded-xl shadow-lg p-6 transition cursor-pointer">
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
    <div className="bg-[var(--royal-blue-dark)] text-white text-center px-6 py-20">
      <h1 className="text-5xl font-bold">Events</h1>
      <p className="mt-4 text-lg">Join us for worship, teaching, prayer, and transformation.</p>
    </div>
    <Messages />
    <PublicContent />
  </Page>
);

export const ContactPage = () => (
  <Page>
    <Contact />
  </Page>
);

export const VisitPage = () => (
  <Page>
    <Visit />
  </Page>
);