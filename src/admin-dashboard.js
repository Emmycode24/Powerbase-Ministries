import { useState } from "react";
import PropTypes from "prop-types";
import { useEvents } from "./use-events";

const AdminDashboard = () => {
  const { events, addEvent, deleteEvent } = useEvents();

  const [form, setForm] = useState({
    title: "",
    category: "service",
    startDate: "",
    endDate: "",
    time: "",
    location: "",
    description: "",
    recurring: null,
    dayOfWeek: 0,
    weekOfMonth: 1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.startDate) return;

    addEvent({
      ...form,
      id: Date.now(),
      endDate: form.endDate || form.startDate,
      recurring: form.recurring === "none" ? null : form.recurring,
    });

    setForm({
      title: "",
      category: "service",
      startDate: "",
      endDate: "",
      time: "",
      location: "",
      description: "",
      recurring: null,
      dayOfWeek: 0,
      weekOfMonth: 1,
    });
  };

  return (
    <section className="pt-32 max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-[var(--purple)] mb-6">
        Admin Dashboard
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 gap-4 bg-white p-6 rounded-xl shadow mb-10"
      >
        <input
          placeholder="Event title"
          className="input"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        <select
          className="input"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        >
          <option value="service">Service</option>
          <option value="vigil">Vigil</option>
        </select>
        <input
          type="date"
          className="input"
          value={form.startDate}
          onChange={(e) => setForm({ ...form, startDate: e.target.value })}
          required
        />
        <input
          type="date"
          className="input"
          value={form.endDate}
          onChange={(e) => setForm({ ...form, endDate: e.target.value })}
        />
        <input
          placeholder="Time"
          className="input"
          value={form.time}
          onChange={(e) => setForm({ ...form, time: e.target.value })}
        />
        <input
          placeholder="Location"
          className="input"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
        />
        <textarea
          placeholder="Description"
          className="md:col-span-2 input"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <button className="md:col-span-2 bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
          Add Event
        </button>
      </form>

      {/* EVENT LIST */}
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-xl font-bold mb-4">Existing Events</h3>
        <ul className="space-y-3">
          {events.map((e) => (
            <li
              key={e.id}
              className="flex justify-between items-center border-b pb-2"
            >
              <span>
                <strong>{e.title}</strong> ({e.category}) on {e.startDate}
              </span>
              <button
                onClick={() => deleteEvent(e.id)}
                className="text-red-600 font-semibold"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

AdminDashboard.propTypes = {};
export default AdminDashboard;
