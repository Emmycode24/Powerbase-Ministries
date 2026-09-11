import { useEvents } from "./use-events";
import EventForm from "./admin-eventform";

const AdminDashboard = () => {
  const { events, addEvent, deleteEvent } = useEvents();

  return (
    <section className="pt-32 max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-[var(--purple)] mb-6">
        Admin Dashboard
      </h2>

      {/* Reusable Event Form */}
      <div className="bg-white p-6 rounded-xl shadow mb-10">
        <EventForm onAdd={addEvent} />
      </div>

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

// No props used
export default AdminDashboard;
