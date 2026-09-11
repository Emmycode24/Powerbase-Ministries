import React from "react";

const services = [
  ["Champion’s Hour", "A powerful Sunday worship experience filled with the Word, worship, and miracles.", "Day: Sunday | Time: 8:00am – 11:00am"],
  ["Discovery of Destinies", "Midweek service focused on purpose discovery and destiny alignment.", "Tuesday • 6:00pm – 7:30pm"],
  ["Jesus-Night", "A worship and prayer encounter centered on the presence of Jesus.", "Thursday • 6:00pm – 7:30pm"],
  ["Believers Victory Night", "An all-night vigil of intense prayer, declarations, and spiritual warfare.", "First Friday • 11:00pm – 3:00am"],
];

const Messages = () => (
  <section id="messages" className="bg-gray-50 text-center px-6 py-20">
    <h2 className="text-4xl font-bold text-purple-900 mb-4">Our Weekly Services</h2>
    <p className="text-gray-700 mb-10">Experience powerful moments of worship, teaching, prayer, and transformation.</p>
    <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4 text-left">
      {services.map(([title, description, schedule]) => (
        <article key={title} className="bg-white p-6 rounded-xl shadow-md border-t-4 border-yellow-400">
          <h3 className="text-xl font-semibold text-purple-900 mb-3">{title}</h3>
          <p className="text-gray-700 mb-5">{description}</p>
          <p className="text-sm font-semibold text-gray-900">{schedule}</p>
        </article>
      ))}
    </div>
  </section>
);

export default Messages;