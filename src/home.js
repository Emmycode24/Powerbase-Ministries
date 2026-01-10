import React from "react";
import heroImg from "./purplebg2.jpg"; // Add a lively church image here
import logo from "./pb logo - Copy.jpg"; // Your church logo
import "./index.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section
        className="h-screen bg-gradient-to-r from-purple-600 to-yellow-400 flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black/40 p-8 rounded-xl max-w-3xl">
          <img src={logo} alt="Powerbase Ministries" className="mx-auto h-24 mb-4 rounded-full shadow-lg" />
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Welcome to Powerbase Ministry International</h1>
          <p className="text-lg sm:text-xl mb-6">Discover, Recover and Shape Destinies.</p>
          <Link
            to="/events"
            className="bg-white text-purple-600 font-bold px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition"
          >
            Join Us This Sunday
          </Link>
        </div>
      </section>

      {/* About / Mission Section */}
      <section className="py-20 bg-white text-gray-800 px-6 font-vend-sans">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <img
            src={logo}
            alt="About us"
            className="rounded-xl shadow-lg w-full max-w-xs mx-auto md:mx-0"
          />

          <div>
            <h2 className="text-4xl font-bold text-purple-600 mb-4 font-vend-sans fs-2">Our Mission</h2>
            <p className="mb-4 weight-500 fs-2">
              At Powerbase Ministry International, we are committed to nurturing faith, inspiring purpose, and
              fostering a community that uplifts everyone. Join us in our journey to empower lives and build a
              strong foundation in Christ.
            </p>
            <p className="mb-4 fs-2">
              From weekly services to special vigils, our church provides opportunities to grow spiritually,
              connect with others, and make a difference in the world.
            </p>
           
            <Link
              to="/about"
              className="text-purple-600 font-bold hover:underline"
            >
              Learn More About Us →
            </Link>
          </div>
        </div>
      </section>

      {/* Services / Highlights Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-yellow-50 px-6 font-vend-sans">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-purple-600 mb-6">Our Weekly Services</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Join our empowering services and experience the transformative power of faith.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto font-vend-sans">
          {[
            { title: "Champion's Hour", day: "Sunday", time: "8:00am - 11:00am" },
            { title: "Discovery of Destinies", day: "Tuesday", time: "6:00pm - 7:30pm" },
            { title: "Jesus-Night", day: "Thursday", time: "6:00pm - 7:30pm" },
            { title: "Morning Dew", day: "Saturday", time: "7:00am - 8:00am" },
            { title: "Believers Victory Night", day: "First Friday", time: "11:00pm - 3:00am" },
          ].map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:scale-105 hover:shadow-2xl transition font-vend-sans"
            >
              <h3 className="text-xl font-bold text-purple-600 mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.day}</p>
              <p className="text-gray-500">{service.time}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-600 text-white py-12 px-6 mt-20 font-vend-sans">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-vend-sans">Powerbase Ministry International</h3>
            <p className="text-gray-200 font-vend-sans">
              Empowering lives, transforming communities, and spreading the Gospel.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-vend-sans">Contact Us :</h3>
            <p className="font-vend-sans">Email: info@powerbaseministry.org</p>
            <p className="font-vend-sans">Phone: +234 803 726 1478</p>
            <p className="font-vend-sans">Address: 16 , olofuntuyi street, baruwa inside, ipaja, Lagos state</p>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-vend-sans">Follow Us</h3>
            <div className="flex gap-4 mt-2">
              <a href="#" className="hover:text-yellow-400 transition">Facebook</a>
              <a href="#" className="hover:text-yellow-400 transition">Instagram</a>
              <a href="#" className="hover:text-yellow-400 transition">YouTube</a>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-300 mt-8 border-t border-white/30 pt-4 font-vend-sans">
          &copy; {new Date().getFullYear()} Powerbase Ministry International. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
