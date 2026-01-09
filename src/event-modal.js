const EventModal = ({ event, onClose }) => {
  if (!event) return null;

  // Safe dates
  const startDate = event.startDate || event.date;
  const endDate = event.endDate || event.date || startDate;

  const start = startDate.replace(/-/g, "");
  const end = endDate.replace(/-/g, "");

  const googleUrl = `https://www.google.com/calendar/render?action=TEMPLATE
&text=${encodeURIComponent(event.title)}
&dates=${start}T080000Z/${end}T110000Z
&details=${encodeURIComponent(event.description)}
&location=${encodeURIComponent(event.location)}`;

  const icsFile = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${event.title}
DTSTART:${start}T080000Z
DTEND:${end}T110000Z
DESCRIPTION:${event.description}
LOCATION:${event.location}
END:VEVENT
END:VCALENDAR
`;

  const downloadICS = () => {
    const blob = new Blob([icsFile], { type: "text/calendar" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${event.title}.ics`;
    link.click();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
        {/* Gradient Header */}
        <div className="bg-gradient-to-r from-purple-600 to-yellow-400 p-6">
          <h2 className="text-2xl font-bold text-white">{event.title}</h2>
          <p className="text-sm text-white/90 mt-1">
            {startDate} → {endDate} | {event.time}
          </p>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          <p className="text-gray-700 font-medium">Location:</p>
          <p className="text-gray-600">{event.location}</p>

          <p className="text-gray-700 font-medium">Description:</p>
          <p className="text-gray-600">{event.description}</p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <a
              href={googleUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-center font-semibold transition"
            >
              Add to Google Calendar
            </a>

            <button
              onClick={downloadICS}
              className="flex-1 border-2 border-purple-600 hover:bg-purple-50 text-purple-700 px-4 py-2 rounded-full font-semibold transition"
            >
              Apple / Outlook
            </button>
          </div>

          <button
            onClick={onClose}
            className="w-full mt-4 text-gray-500 hover:text-gray-700 font-medium transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventModal;

