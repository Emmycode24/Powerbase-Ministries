import React from "react";
import PropTypes from "prop-types";
import heroImg from "./purplebg2.jpg"; // Add a lively church image here
import logo from "./pb logo - Copy.jpg"; // Your church logo
import "./index.css";
import { Link } from "react-router-dom";
import { useModal } from "./modal-context";
import { events as allEvents } from "./all-events";

const Home = () => {
  const { openModal } = useModal();
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

     {/* Weekly Services – Feature Grid */}
<section className="py-20 bg-[#f5f5f5] px-6 font-vend-sans">
  <div className="max-w-6xl mx-auto mb-12 text-center">
    <h2 className="text-4xl font-bold text-purple-600 mb-4">
      Our Weekly Services
    </h2>
    <p className="text-gray-600 max-w-2xl mx-auto">
      Experience powerful moments of worship, teaching, prayer, and transformation.
    </p>
  </div>

  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[220px]">

    {/* Champion's Hour */}
    <div onClick={() => openModal(allEvents.find(e => e.id === 1))} className="row-span-2 bg-purple-100 rounded-3xl p-8 shadow hover:shadow-xl transition cursor-pointer">
      <h3 className="text-2xl font-bold text-purple-700 mb-4">
        Champion’s Hour
      </h3>
      <p className="text-gray-700 mb-6">
        A powerful Sunday worship experience filled with the Word, worship, and miracles.
      </p>
      <div className="text-sm text-gray-600">
        <p><strong>Day:</strong> Sunday</p>
        <p><strong>Time:</strong> 8:00am – 11:00am</p>
      </div>
    </div>

    {/* Discovery of Destinies */}
    <div onClick={() => openModal(allEvents.find(e => e.id === 2))} className="bg-pink-100 rounded-3xl p-6 shadow hover:shadow-xl transition cursor-pointer">
      <h3 className="text-xl font-bold text-pink-700 mb-2">
        Discovery of Destinies
      </h3>
      <p className="text-gray-700 text-sm mb-4">
        Midweek service focused on purpose discovery and destiny alignment.
      </p>
      <p className="text-sm text-gray-600">
        Tuesday • 6:00pm – 7:30pm
      </p>
    </div>

    {/* Jesus-Night */}
    <div onClick={() => openModal(allEvents.find(e => e.id === 3))} className="bg-yellow-100 rounded-3xl p-6 shadow hover:shadow-xl transition cursor-pointer">
      <h3 className="text-xl font-bold text-yellow-700 mb-2">
        Jesus-Night
      </h3>
      <p className="text-gray-700 text-sm mb-4">
        A worship and prayer encounter centered on the presence of Jesus.
      </p>
      <p className="text-sm text-gray-600">
        Thursday • 6:00pm – 7:30pm
      </p>
    </div>

    {/* Believers Victory Night */}
    <div onClick={() => openModal(allEvents.find(e => e.id === 4))} className="col-span-1 sm:col-span-2 bg-green-100 rounded-3xl p-8 shadow hover:shadow-xl transition cursor-pointer">
      <h3 className="text-2xl font-bold text-green-700 mb-4">
        Believers Victory Night
      </h3>
      <p className="text-gray-700 mb-4">
        An all-night vigil of intense prayer, declarations, and spiritual warfare.
      </p>
      <p className="text-sm text-gray-600">
        First Friday • 11:00pm – 3:00am
      </p>
    </div>

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

Home.propTypes = {};
export default Home;
