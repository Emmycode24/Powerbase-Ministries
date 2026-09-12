import React, { useState } from "react";

const Visit = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.target.reset();
  };

  return (
    <section className="pt-32 pb-20 min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 relative overflow-hidden">
      <div className="max-w-3xl w-full mx-auto px-6 z-10">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--purple)] mb-4">Plan a Visit</h1>
          <p className="text-lg text-gray-700 mb-2">Let’s join us this Sunday as we gather in worship, prayer, and the Word.</p>
          <p className="text-gray-700 mb-10">We look forward to welcoming you. Let us know when you plan to join us.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl space-y-6 animate-fade-in delay-200">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="text-sm font-medium text-gray-700">
              Full Name
              <input name="name" type="text" placeholder="Full Name" required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 transition-colors focus:border-purple-700 focus:outline-none" />
            </label>
            <label className="text-sm font-medium text-gray-700">
              Email
              <input name="email" type="email" placeholder="Email" required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 transition-colors focus:border-purple-700 focus:outline-none" />
            </label>
            <label className="text-sm font-medium text-gray-700">
              Phone
              <input name="phone" type="tel" placeholder="Phone number" required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 transition-colors focus:border-purple-700 focus:outline-none" />
            </label>
            <label className="text-sm font-medium text-gray-700">
              Preferred date
              <input name="date" type="date" required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 transition-colors focus:border-purple-700 focus:outline-none" />
            </label>
          </div>
          <label className="block text-sm font-medium text-gray-700">
            Service you plan to attend
            <select name="service" defaultValue="" required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 transition-colors focus:border-purple-700 focus:outline-none">
              <option value="" disabled>Select a service</option>
              <option>Champion’s Hour</option>
              <option>Discovery of Destinies</option>
              <option>Jesus-Night</option>
              <option>Believers Victory Night</option>
            </select>
          </label>
          <label className="block text-sm font-medium text-gray-700">
            Message
            <textarea name="message" placeholder="Tell us anything we should know" rows="4" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 transition-colors focus:border-purple-700 focus:outline-none" />
          </label>
          <button type="submit" className="bg-gradient-to-r from-[var(--purple)] to-pink-500 text-white px-8 py-3 rounded-full font-bold shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            Send Visit Request
          </button>
          {submitted && <p className="text-sm text-green-700" role="status">Thank you. We look forward to welcoming you.</p>}
        </form>
      </div>
    </section>
  );
};

export default Visit;
