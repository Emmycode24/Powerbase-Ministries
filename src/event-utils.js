// Utility functions for event logic

/**
 * Filter events by category
 * @param {Array} events - Array of event objects
 * @param {string} category - Category to filter by
 * @returns {Array} Filtered events
 */
export function filterEventsByCategory(events, category) {
  if (category === "all") return events;
  return events.filter((e) => e.category === category);
}

/**
 * Get color classes for event category
 * @param {string} category - Event category
 * @returns {string} Tailwind color classes
 */
export function getEventColor(category) {
  switch (category) {
    case "service":
      return "bg-purple-600 text-white";
    case "vigil":
      return "bg-yellow-400 text-black";
    default:
      return "bg-gray-400 text-white";
  }
}
