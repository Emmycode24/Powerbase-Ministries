
import React from "react";
import { Mail, User, MessageCircle, PhoneCall } from "lucide-react";

const Contact = React.memo(() => (
  <section className="pt-32 pb-20 min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 relative overflow-hidden">
    {/* Animated shapes */}
    <div className="absolute top-0 left-0 w-32 h-32 bg-[var(--purple)] opacity-20 rounded-full blur-2xl animate-pulse" />
    <div className="absolute bottom-0 right-0 w-40 h-40 bg-pink-300 opacity-20 rounded-full blur-2xl animate-pulse" />

    <div className="max-w-3xl w-full mx-auto px-6 z-10">
      <h2 className="text-4xl md:text-5xl font-bold text-[var(--purple)] mb-4 text-center animate-fade-in">
        Prayer & Contact
      </h2>
      <p className="text-lg text-gray-700 text-center mb-8 animate-fade-in delay-100">
        We believe in the power of prayer! Reach out and let us stand with you. <span className="font-semibold text-pink-600">Your miracle is just a prayer away.</span>
      </p>

      <form className="bg-white p-8 rounded-2xl shadow-xl space-y-6 animate-fade-in delay-200">
        <div className="flex items-center border rounded px-3 py-2">
          <User className="text-[var(--purple)] mr-2" size={20} />
          <input className="w-full outline-none" placeholder="Full Name" />
        </div>
        <div className="flex items-center border rounded px-3 py-2">
          <Mail className="text-[var(--purple)] mr-2" size={20} />
          <input className="w-full outline-none" placeholder="Email" type="email" />
        </div>
        <div className="flex items-center border rounded px-3 py-2">
          <MessageCircle className="text-[var(--purple)] mr-2" size={20} />
          <textarea className="w-full outline-none resize-none" rows="4" placeholder="Your prayer request" />
        </div>
        <button className="bg-gradient-to-r from-[var(--purple)] to-pink-500 text-white px-8 py-3 rounded-full font-bold shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
          Submit
        </button>
      </form>

      {/* Divider */}
      <div className="flex items-center my-10">
        <span className="flex-grow h-px bg-gradient-to-r from-[var(--purple)] via-pink-400 to-blue-400" />
        <span className="mx-4 text-gray-400">or</span>
        <span className="flex-grow h-px bg-gradient-to-r from-blue-400 via-pink-400 to-[var(--purple)]" />
      </div>

      {/* Contact Info */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 animate-fade-in delay-300">
        <div className="flex items-center gap-2 text-gray-700">
          <PhoneCall className="text-[var(--purple)]" size={20} />
          <span>+234 803 726 1478</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <Mail className="text-[var(--purple)]" size={20} />
          <span>info@powerbasechurch.org</span>
        </div>
      </div>
    </div>
    {/* Simple fade-in animation styles */}
    <style>{`
      .animate-fade-in {
        opacity: 0;
        animation: fadeIn 0.8s forwards;
      }
      .animate-fade-in.delay-100 { animation-delay: 0.1s; }
      .animate-fade-in.delay-200 { animation-delay: 0.2s; }
      .animate-fade-in.delay-300 { animation-delay: 0.3s; }
      @keyframes fadeIn {
        to { opacity: 1; }
      }
    `}</style>
  </section>
));

Contact.propTypes = {};
export default Contact;
