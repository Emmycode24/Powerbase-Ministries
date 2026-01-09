import { useState } from "react";
import { events as allEvents } from "./all-events";
import EventFilter from "./event-filter";
import EventCalendar from "./event-calendar";
import EventModal from "./event-modal";

const Events = () => {
  const [filter, setFilter] = useState("all");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filteredEvents =
    filter === "all"
      ? allEvents
      : allEvents.filter((e) => e.category === filter);

  return (
    <section className="pt-32 pb-20 max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center text-[var(--purple)] mb-6">
        Church Calendar
      </h2>

      <EventFilter active={filter} setActive={setFilter} />

      <EventCalendar
        events={filteredEvents}
        onSelect={setSelectedEvent}
      />

      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </section>
  );
};

export default Events;

