export const events = [
  {
    id: 1,
    title: "Champion’s Hour",
    category: "service",
    startDate: "2026-01-04",
    endDate: "2026-01-04",
    time: "8:00 AM – 11:00 AM",
    location: "Main Auditorium",
    description: "Sunday worship experience",
    recurring: "weekly", // 👈 weekly event
    dayOfWeek: 0 // Sunday
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
    dayOfWeek: 2 // Tuesday
  },
 {
  id: 5,
  title: "Believers Victory Night",
  category: "vigil",
  startDate: "2026-01-03", // pick the first Friday of the month as anchor
  endDate: "2026-01-03",
  time: "11:00 PM – 3:00 AM",
  location: "Main Auditorium",
  description: "All-night victory prayers and declarations.",
  recurring: "monthly", 
  dayOfWeek: 5, // Friday
  weekOfMonth: 1 // first Friday
},

{
  id: 4,
  title: "Jesus-Night",
  category: "service",
  startDate: "2026-01-08",   // any Thursday date to anchor it
  endDate: "2026-01-08",
  time: "6:00 PM – 7:30 PM",
  location: "Main Auditorium",
  description: "An atmosphere of worship, prayer, and the presence of Jesus.",
  recurring: "weekly",
  dayOfWeek: 4 // 👈 Thursday (VERY IMPORTANT)
}

];
