import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { filterEventsByCategory } from "./event-utils";
/**
 * EventFilter component for filtering events by category
 * @param {string} active - Currently active filter
 * @param {function} setActive - Function to set active filter
 * @param {Array} events - Array of event objects
 */
const EventFilter = ({ active, setActive, events = [] }) => {
  // Available categories
  const categories = ["all", "service", "vigil"];

  // Memoized count of events per category
  const countEvents = useMemo(() => {
    return (category) => filterEventsByCategory(events, category).length;
  }, [events]);

  return (
    <div
      className="flex flex-wrap gap-3 justify-center mb-8"
      role="tablist"
      aria-label="Event Categories"
    >
      {categories.map((filter) => {
        const isActive = active === filter;
        return (
          <button
            key={filter}
            onClick={() => setActive(filter)}
            role="tab"
            aria-selected={isActive}
            className={`px-5 py-2 rounded-full font-medium capitalize transition flex items-center gap-2
              ${
                isActive
                  ? "bg-[var(--purple)] text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }
            `}
          >
            <span>{filter}</span>
            <span
              className={`text-xs px-2 py-0.5 rounded-full font-semibold
                ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-gray-300 text-gray-800"
                }
              `}
            >
              {countEvents(filter)}
            </span>
          </button>
        );
      })}
    </div>
  );
};

EventFilter.propTypes = {
  active: PropTypes.string.isRequired,
  setActive: PropTypes.func.isRequired,
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      category: PropTypes.string,
      startDate: PropTypes.string,
      endDate: PropTypes.string,
      time: PropTypes.string,
      location: PropTypes.string,
      description: PropTypes.string,
      recurring: PropTypes.string,
      dayOfWeek: PropTypes.number,
      weekOfMonth: PropTypes.number,
    })
  ),
};
export default EventFilter;
