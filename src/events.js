import { useState } from "react";
import { useEvents } from "./use-events"; // your hook that stores events
import EventFilter from "./event-filter";
import EventCalendar from "./event-calendar";
import EventModal from "./event-modal";
import { filterEventsByCategory } from "./event-utils";

import PropTypes from "prop-types";
const Events = () => {
  const { events } = useEvents(); // get all events (includes newly added)
  const [filter, setFilter] = useState("all");
  const [selectedEvent, setSelectedEvent] = useState(null);

  // filter events if user selects a category
  const filteredEvents = filterEventsByCategory(events, filter);

  return (
    <section className="pt-32 pb-20 max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center text-[var(--purple)] mb-6">
        Church Calendar
      </h2>

      {/* Filter buttons */}
      <EventFilter active={filter} setActive={setFilter} />

      {/* Calendar */}
      <EventCalendar
        events={filteredEvents} // all events or filtered
        onSelect={setSelectedEvent} // open modal on click
      />

      {/* Modal */}
      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </section>
  );
};

Events.propTypes = {};
export default Events;

