import React from "react";

const services = [
  ["Champions’ Hour", "A powerful worship experience filled with the Word, worship, and miracles.", "Sunday service", "8:00 AM"],
  ["Discovery Hour", "A focused time for discovering purpose and aligning with God’s will.", "Tuesday service"," 6:00 PM"],
  ["Jesus Night", "A worship and prayer encounter centered on the power of Jesus’ name.", "Thursday service", "6:00 PM"],
  [" Believers Victory Night", "A night of prayer, declarations, and spiritual victory.", "First Friday of the month", "10:00 PM"],
];

const specialPrograms = [
  ["Holyghost Conference", "A special gathering for worship, teaching, prayer, and an encounter with the Holy Spirit."],
  ["Holy Communion Service", "A dedicated service of remembrance, fellowship, and faith around the Lord’s table."],
  ["Widows & Help Ministry", "Practical care, encouragement, and support for widows and people in need."],
  ["Rural Church Planting & Mission", "Taking the gospel and a growing church community to rural communities."],
  ["Outdoor Crusade", "An open-air evangelistic gathering proclaiming the good news of Jesus to the community."],
  ["Prison Ministry", "Sharing hope, prayer, and the transforming message of Christ with people in prison."],
];

const Messages = () => (
  <section id="messages" className="bg-gray-50 text-center px-6 py-20">
    <p className="eyebrow text-[var(--royal-blue)]">  What we do </p>
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
    <div className="max-w-6xl mx-auto mt-16 text-left">
      <p className="eyebrow text-[var(--gold-light)] text-center">Special programs</p>
      <h3 className="text-3xl font-bold text-white text-center mb-8">Programs beyond our regular gatherings.</h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {specialPrograms.map(([title, description]) => (
          <article key={title} className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[var(--royal-blue)]">
            <h4 className="text-xl font-semibold text-white mb-3">{title}</h4>
            <p className="text-gray-700">{description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Messages;