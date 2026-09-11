import React, { useState, createContext, useContext, useMemo } from "react";
import PropTypes from "prop-types";

// Initial dummy events
const initialEvents = [
  {
    id: 1,
    title: "Champion’s Hour",
    category: "service",
    startDate: "2026-01-04",
    endDate: "2026-01-04",
    time: "8:00 AM – 11:00 AM",
    location: "Main Auditorium",
    description: "Sunday worship experience",
    recurring: "weekly",
    dayOfWeek: 0, // Sunday
  },
  {
    id: 2,
    title: "Discovery of Destinies",
    category: "service",
    startDate: "2026-01-06",
    endDate: "2026-01-06",
    time: "6:00 PM – 7:30 PM",
    location: "Church Hall",
    description: "Midweek teaching service",
    recurring: "weekly",
    dayOfWeek: 2, // Tuesday
  },
  {
    id: 5,
    title: "Believers Victory Night",
    category: "vigil",
    startDate: "2026-01-03",
    endDate: "2026-01-03",
    time: "11:00 PM – 3:00 AM",
    location: "Main Auditorium",
    description: "All-night victory prayers and declarations.",
    recurring: "monthly",
    dayOfWeek: 5, // Friday
    weekOfMonth: 1,
  },
  {
    id: 4,
    title: "Jesus-Night",
    category: "service",
    startDate: "2026-01-08",
    endDate: "2026-01-08",
    time: "6:00 PM – 7:30 PM",
    location: "Main Auditorium",
    description: "An atmosphere of worship, prayer, and the presence of Jesus.",
    recurring: "weekly",
    dayOfWeek: 4, // Thursday
  },
];


const EVENTS_STORAGE_KEY = "church_events";
const EventsContext = createContext();



export const EventsProvider = ({ children }) => {
  // Load events from localStorage or fallback to initialEvents
  const [events, setEvents] = useState(() => {
    const stored = localStorage.getItem(EVENTS_STORAGE_KEY);
    return stored ? JSON.parse(stored) : initialEvents;
  });


  // Save events to localStorage whenever they change
  React.useEffect(() => {
    localStorage.setItem(EVENTS_STORAGE_KEY, JSON.stringify(events));
  }, [events]);

  // Generate a unique event ID
  const generateId = () => {
    return Math.max(0, ...events.map(e => e.id)) + 1;
  };

  const addEvent = (event) => {
    setEvents((prev) => [...prev, { ...event, id: generateId() }]);
  };

  const updateEvent = (id, updatedEvent) => {
    setEvents((prev) => prev.map(e => e.id === id ? { ...e, ...updatedEvent } : e));
  };

  const deleteEvent = (id) => {
    setEvents((prev) => prev.filter((e) => e.id !== id));
  };

  // Memoize context value for performance
  const value = useMemo(() => ({ events, addEvent, updateEvent, deleteEvent }), [events, addEvent]);

  return (
    <EventsContext.Provider value={value}>
      {children}
    </EventsContext.Provider>
  );
};

EventsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useEvents = () => useContext(EventsContext);
