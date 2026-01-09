import { useState, useRef } from "react";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const EventCalendar = ({ events, onSelect }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const today = new Date();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  // Swipe handlers
  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchMove = (e) => { touchEndX.current = e.touches[0].clientX; };
  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      if (diff > 50) nextMonth();
      else if (diff < -50) prevMonth();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Event colors
  const getEventColor = (category) => {
    switch (category) {
      case "service":
        return "bg-purple-600 text-white";
      case "vigil":
        return "bg-yellow-400 text-black";
      default:
        return "bg-gray-400 text-white";
    }
  };

  const getEventsForDay = (day) => {
    const date = new Date(year, month, day);
    return events.filter((event) => {
      const start = new Date(event.startDate);
      const end = new Date(event.endDate || event.startDate);
      const inRange = date >= start && date <= end;
      const weekly = event.recurring === "weekly" && date.getDay() === event.dayOfWeek;

      let monthly = false;
      if (event.recurring === "monthly") {
        if (event.weekOfMonth) {
          const firstDayOfMonth = new Date(year, month, 1).getDay();
          const firstEventDay = 1 + ((event.dayOfWeek - firstDayOfMonth + 7) % 7);
          monthly = day === firstEventDay;
        } else monthly = date.getDate() === start.getDate();
      }

      return inRange || weekly || monthly;
    });
  };

  return (
    <div
      className="overflow-x-auto p-6 rounded-xl"
      style={{
        background: "linear-gradient(to bottom, #fdf6ff, #f6f0ff)", // subtle purple gradient
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <button className="px-4 py-2 border rounded shadow hover:bg-gray-100 transition">
          ←
        </button>
        <h3 className="text-2xl font-bold text-[var(--purple)] text-center flex-1">
          {currentDate.toLocaleString("default", { month: "long", year: "numeric" })}
        </h3>
        <button className="px-4 py-2 border rounded shadow hover:bg-gray-100 transition">
          →
        </button>
      </div>

      {/* Legend */}
      <div className="flex gap-6 mb-4 justify-center flex-wrap">
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full bg-purple-600"></span>
          <span className="text-sm font-medium">Service</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full bg-yellow-400"></span>
          <span className="text-sm font-medium">Vigil</span>
        </div>
      </div>

      {/* Days of Week */}
      <div className="grid grid-cols-7 gap-2 mb-2 text-center font-semibold text-gray-700">
        {daysOfWeek.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-3">
        {Array(firstDay).fill(null).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}

        {Array.from({ length: daysInMonth }, (_, i) => {
          const day = i + 1;
          const isToday =
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear();

          const dayEvents = getEventsForDay(day);

          return (
            <div
              key={day}
              className={`bg-white shadow-md hover:shadow-lg transition p-2 rounded-lg min-h-[100px] flex flex-col ${
                isToday ? "bg-[var(--gold)]/20 border-[var(--gold)] border-2" : ""
              }`}
            >
              <div className="text-sm font-bold mb-2 text-center">{day}</div>
              <div className="flex flex-col gap-1">
                {dayEvents.map((event) => (
                  <button
                    key={event.id}
                    onClick={() => onSelect(event)}
                    className={`${getEventColor(
                      event.category
                    )} text-xs px-3 py-1 rounded-full font-semibold truncate
                    hover:scale-105 hover:shadow-lg transition-transform duration-200`}
                  >
                    {event.title}
                    <span className="ml-1 text-[10px] font-normal uppercase opacity-80">
                      {event.category}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventCalendar;


