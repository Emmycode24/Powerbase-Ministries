const EventFilter = ({ active, setActive, events = [] }) => {
  const categories = ["all", "service", "vigil"];

  const countEvents = (category) => {
    if (category === "all") return events.length;
    return events.filter((e) => e.category === category).length;
  };

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

export default EventFilter;
