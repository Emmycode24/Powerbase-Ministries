import { useState } from "react";
import PropTypes from "prop-types";

const EventForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    title: "",
    category: "service",
    startDate: "",
    endDate: "",
    time: "",
    location: "",
    description: "",
    recurring: "none",
    dayOfWeek: 0,
    weekOfMonth: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    onAdd(form);
    alert("Event added successfully!");
    setForm({
      title: "",
      category: "service",
      startDate: "",
      endDate: "",
      time: "",
      location: "",
      description: "",
      recurring: "none",
      dayOfWeek: 0,
      weekOfMonth: 1,
    });
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      <input name="title" placeholder="Event Title" onChange={handleChange} className="input" required />
      <input name="startDate" type="date" onChange={handleChange} required />
      <input name="endDate" type="date" onChange={handleChange} />
      <input name="time" placeholder="Time (e.g. 6–8 PM)" onChange={handleChange} />
      <input name="location" placeholder="Location" onChange={handleChange} />
      <textarea name="description" placeholder="Description" onChange={handleChange} />

      <select name="category" onChange={handleChange}>
        <option value="service">Service</option>
        <option value="vigil">Vigil</option>
      </select>

      <select name="recurring" onChange={handleChange}>
        <option value="none">One-time</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </select>

      <select name="dayOfWeek" onChange={handleChange}>
        <option value={0}>Sunday</option>
        <option value={1}>Monday</option>
        <option value={2}>Tuesday</option>
        <option value={3}>Wednesday</option>
        <option value={4}>Thursday</option>
        <option value={5}>Friday</option>
        <option value={6}>Saturday</option>
      </select>

      <button className="bg-purple-600 text-white px-6 py-2 rounded-xl">
        Add Event
      </button>
    </form>
  );
};

EventForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};
export default EventForm;
