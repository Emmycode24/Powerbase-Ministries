import { useState, useRef, useMemo } from "react";
import { getEventColor } from "./event-utils";
import PropTypes from "prop-types";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/**
 * Normalize a date to noon to avoid timezone issues
 * @param {string|Date} date - Date to normalize
 * @returns {Date} Normalized date
 */
const normalizeDate = (date) => {
  const d = new Date(date);
  d.setHours(12, 0, 0, 0);
  return d;
};

/**
 * Check if two dates are the same day
 * @param {Date} a
 * @param {Date} b
 * @returns {boolean}
 */
const isSameDay = (a, b) =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();

const EventCalendar = ({ events = [], onSelect }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const today = useMemo(() => normalizeDate(new Date()), []);

  const firstDay = useMemo(() => new Date(year, month, 1).getDay(), [year, month]);
  const daysInMonth = useMemo(() => new Date(year, month + 1, 0).getDate(), [year, month]);

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

  // getEventColor is now imported from event-utils.js

  /**
   * Get events for a specific day, handling one-time, weekly, and monthly recurring events
   * @param {number} day - Day of the month
   * @returns {Array} Events for the day
   */
  const getEventsForDay = useMemo(() => {
    return (day) => {
      const currentDay = normalizeDate(new Date(year, month, day));
      return events.filter((event) => {
        const start = normalizeDate(event.startDate);
        const end = normalizeDate(event.endDate || event.startDate);

        // One-time event
        if (!event.recurring) {
          return isSameDay(start, currentDay);
        }

        // Weekly event
        if (event.recurring === "weekly") {
          return currentDay.getDay() === event.dayOfWeek;
        }

        // Monthly event (e.g., first Friday)
        if (event.recurring === "monthly") {
          if (event.weekOfMonth) {
            const firstDayOfMonth = new Date(year, month, 1);
            const offset =
              (event.dayOfWeek - firstDayOfMonth.getDay() + 7) % 7;
            const targetDay = 1 + offset + (event.weekOfMonth - 1) * 7;
            return day === targetDay;
          }
          return currentDay.getDate() === start.getDate();
        }

        return false;
      });
    };
  }, [events, year, month]);

  return (
    <section
      className="bg-white rounded-xl shadow p-4 md:p-6"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Church Events Calendar"
      tabIndex={0}
    >
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={prevMonth}
          className="px-4 py-2 border rounded"
          aria-label="Previous Month"
        >
          
        </button>

        <h3
          className="text-xl md:text-2xl font-bold text-[var(--purple)]"
          aria-live="polite"
        >
          {currentDate.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </h3>

        <button
          onClick={nextMonth}
          className="px-4 py-2 border rounded"
          aria-label="Next Month"
        >
          
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
    </section>
  );
};

EventCalendar.propTypes = {
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
  onSelect: PropTypes.func.isRequired,
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
    <div className="grid grid-cols-7 gap-2 mb-2 text-center font-semibold" role="row">
      {daysOfWeek.map((day) => (
        <div key={day} role="columnheader">{day}</div>
      ))}
    </div>

    <div className="grid grid-cols-7 gap-2" role="rowgroup">
      {Array(firstDay)
        .fill(null)
        .map((_, i) => (
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
            className={`border rounded-lg p-2 min-h-[120px] ${
              isToday ? "bg-yellow-100 border-yellow-400" : ""
            }`}
            role="gridcell"
            aria-selected={isToday}
            tabIndex={0}
          >
            <div className="text-sm font-bold text-center mb-1">{day}</div>

            {dayEvents.map((event) => (
              <button
                key={event.id}
                onClick={() => onSelect(event)}
                className={`${getEventColor(
                  event.category
                )} text-xs w-full px-2 py-1 rounded-full mb-1 truncate`}
                title={event.title}
                aria-label={`View details for ${event.title}`}
                tabIndex={0}
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

DesktopCalendar.propTypes = {
  daysOfWeek: PropTypes.arrayOf(PropTypes.string).isRequired,
  firstDay: PropTypes.number.isRequired,
  daysInMonth: PropTypes.number.isRequired,
  today: PropTypes.instanceOf(Date).isRequired,
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  getEventsForDay: PropTypes.func.isRequired,
  getEventColor: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
};
/* =========================
   MOBILE AGENDA
========================= */
const MobileAgenda = ({ year, month, daysInMonth, getEventsForDay, onSelect }) => {
  const agenda = [];

  for (let day = 1; day <= daysInMonth; day++) {
    const dayEvents = getEventsForDay(day);
    if (dayEvents.length) agenda.push({ day, events: dayEvents });
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
MobileAgenda.propTypes = {
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  daysInMonth: PropTypes.number.isRequired,
  getEventsForDay: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
};
