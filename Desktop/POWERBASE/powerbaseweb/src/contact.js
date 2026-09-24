import React, { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.target.reset();
  };

  return (
    <section id="contact" className="form-section">
      <div className="max-w-3xl w-full mx-auto px-6 z-10">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--royal-blue-dark)] mb-4 text-center animate-fade-in">Let&apos;s stand with you.</h2>
          <p className="text-gray-700 text-center mb-10 animate-fade-in">We believe in the power of prayer. Reach out and let us walk with you in faith.</p>
        </div>

        <form onSubmit={handleSubmit} className="editorial-form space-y-6 animate-fade-in delay-200">
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Full Name
            <input name="name" type="text" placeholder="Full Name" required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 transition-colors focus:border-[var(--royal-blue)] focus:outline-none" />
          </label>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Email
            <input name="email" type="email" placeholder="Email" required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 transition-colors focus:border-[var(--royal-blue)] focus:outline-none" />
          </label>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Your prayer request
            <textarea name="message" placeholder="Your prayer request" rows="5" required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 transition-colors focus:border-[var(--royal-blue)] focus:outline-none" />
          </label>
          <button type="submit" className="bg-gradient-to-r from-[var(--royal-blue)] to-[var(--gold)] text-white px-8 py-3 rounded-full font-bold shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            Submit
          </button>
          {submitted && <p className="mt-4 text-sm text-green-700" role="status">Thank you. We believe with you in prayer.</p>}
        </form>

        <p className="my-8 text-gray-500">or</p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 animate-fade-in delay-300">
          <p className="flex items-center gap-2 text-gray-700">+2347025005487</p>
          <p className="flex items-center gap-2 text-gray-700">powerbaseministry6@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;