import React from "react";

const services = [
  ["Champions’ Hour", "A powerful worship experience filled with the Word, worship, and miracles.", "Weekly service"],
  ["Discovery Hour", "A focused time for discovering purpose and aligning with God’s will.", "Weekly service"],
  ["Jesus Night", "A worship and prayer encounter centered on the power of Jesus’ name.", "Weekly service"],
  ["Victory Night", "A night of prayer, declarations, and spiritual victory.", "Weekly service"],
];

const Messages = () => (
  <section id="messages" className="bg-gray-50 text-center px-6 py-20">
    <p className="eyebrow text-[var(--royal-blue)]">02 · What we do</p>
    <h2 className="text-4xl font-bold text-[var(--royal-blue-dark)] mb-4">Ministries that move.</h2>
    <p className="text-gray-700 mb-10">Every gathering is an invitation to worship, grow, pray, and live out God&apos;s purpose.</p>
    <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4 text-left">
      {services.map(([title, description, schedule]) => (
        <article key={title} className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[var(--gold)]">
          <h3 className="text-xl font-semibold text-[var(--royal-blue-dark)] mb-3">{title}</h3>
          <p className="text-gray-700 mb-5">{description}</p>
          <p className="text-sm font-semibold text-gray-900">{schedule}</p>
        </article>
      ))}
    </div>
  </section>
);

export default Messages;