import { useState, useRef } from "react";
const isSameDay = (a,b) =>
  a.getFullYear === b.getFullYear() &&
a.getMonth === b.getMonth() &&
a.getDate === b.getDate();

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const EventCalendar = ({ events = [], onSelect }) => {
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

  const handleTouchStart = (e) =>
    (touchStartX.current = e.touches[0].clientX);
  const handleTouchMove = (e) =>
    (touchEndX.current = e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX.current && touchEndX.current) {
      const diff = touchStartX.current - touchEndX.current;
      if (diff > 50) nextMonth();
      if (diff < -50) prevMonth();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

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

    // WEEKLY EVENTS
    if (event.recurring === "weekly") {
      return date.getDay() === event.dayOfWeek;
    }

    // MONTHLY (FIRST FRIDAY)
    if (event.recurring === "monthly" && event.weekOfMonth === 1) {
      const firstDayOfMonth = new Date(year, month, 1).getDay();
      const firstOccurrence =
        1 + ((event.dayOfWeek - firstDayOfMonth + 7) % 7);

      return day === firstOccurrence;
    }

    // ONE-TIME / RANGE EVENTS
    return isSameDay(date, start) || (date >= start && date <= end);
  });
};

 

  return (
    <div
      className="bg-white rounded-xl shadow p-4 md:p-6"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <button onClick={prevMonth} className="px-4 py-2 border rounded">
          ←
        </button>

        <h3 className="text-xl md:text-2xl font-bold text-[var(--purple)] text-center">
          {currentDate.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </h3>

        <button onClick={nextMonth} className="px-4 py-2 border rounded">
          →
        </button>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:block">
        <DesktopCalendar
          daysOfWeek={daysOfWeek}
          firstDay={firstDay}
          daysInMonth={daysInMonth}
          today={today}
          year={year}
          month={month}
          getEventsForDay={getEventsForDay}
          getEventColor={getEventColor}
          onSelect={onSelect}
        />
      </div>

      {/* MOBILE */}
      <div className="block md:hidden">
        <MobileAgenda
          year={year}
          month={month}
          daysInMonth={daysInMonth}
          getEventsForDay={getEventsForDay}
          onSelect={onSelect}
        />
      </div>
    </div>
  );
};

export default EventCalendar;

/* =========================
   DESKTOP CALENDAR
========================= */
const DesktopCalendar = ({
  daysOfWeek,
  firstDay,
  daysInMonth,
  today,
  year,
  month,
  getEventsForDay,
  getEventColor,
  onSelect,
}) => (
  <>
    <div className="grid grid-cols-7 gap-2 mb-2 text-center font-semibold">
      {daysOfWeek.map((day) => (
        <div key={day}>{day}</div>
      ))}
    </div>

    <div className="grid grid-cols-7 gap-2">
      {Array(firstDay)
        .fill(null)
        .map((_, i) => (
          <div key={i} />
        ))}

      {Array.from({ length: daysInMonth }, (_, i) => {
        const day = i + 1;
        const isToday =
          day === today.getDate() &&
          month === today.getMonth() &&
          year === today.getFullYear();

        return (
          <div
            key={day}
            className={`border rounded-lg p-2 min-h-[120px] ${
              isToday ? "bg-yellow-100 border-yellow-400" : ""
            }`}
          >
            <div className="text-sm font-bold text-center mb-1">{day}</div>

            {getEventsForDay(day).map((event) => (
              <button
                key={event.id}
                onClick={() => onSelect(event)}
                className={`${getEventColor(
                  event.category
                )} text-xs w-full px-2 py-1 rounded-full mb-1 truncate`}
              >
                {event.title}
              </button>
            ))}
          </div>
        );
      })}
    </div>
  </>
);

/* =========================
   MOBILE AGENDA
========================= */
const MobileAgenda = ({
  year,
  month,
  daysInMonth,
  getEventsForDay,
  onSelect,
}) => {
  const agenda = [];

  for (let day = 1; day <= daysInMonth; day++) {
    const events = getEventsForDay(day);
    if (events.length) agenda.push({ day, events });
  }

  if (!agenda.length) {
    return <p className="text-center text-gray-500">No events this month</p>;
  }

  return (
    <div className="space-y-4">
      {agenda.map(({ day, events }) => (
        <div key={day} className="border rounded-lg p-4 shadow-sm">
          <h4 className="font-bold text-[var(--purple)] mb-2">
            {new Date(year, month, day).toDateString()}
          </h4>

          {events.map((event) => (
            <button
              key={event.id}
              onClick={() => onSelect(event)}
              className="block w-full text-left p-3 mb-2 rounded-lg bg-gray-100"
            >
              <p className="font-semibold">{event.title}</p>
              <span className="text-xs text-gray-600 uppercase">
                {event.category}
              </span>
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

