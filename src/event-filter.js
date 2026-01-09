const filters = ["all", "service", "vigil"];

const EventFilter = ({ active, setActive }) => {
  return (
    <div className="flex gap-3 justify-center mb-8">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActive(filter)}
          className={`px-5 py-2 rounded-full font-medium capitalize transition ${
            active === filter
              ? "bg-[var(--purple)] text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default EventFilter;