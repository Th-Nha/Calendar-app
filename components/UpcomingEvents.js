import { FaVideo, FaUser } from "react-icons/fa";

export default function UpcomingEvents({ selectedDate, events }) {
  const filteredEvents = events.filter(
    (event) =>
      new Date(event.date).toDateString() === selectedDate.toDateString()
  );

  return (
    <div className="bg-white rounded-lg shadow p-4 mt-4">
      <div className="flex justify-between items-center mb-4">
        <p className="text-[24px] font-bold text-[#0F4C81]">Upcoming Events</p>
        <button
          type="button"
          class="text-white bg-[#0F4C81]  focus:ring-4  font-semibold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
        >
          ViewAll
        </button>
      </div>
      <p className="text-sm font-semibold text-gray-500 mb-2">
        Today,{" "}
        {selectedDate.toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
        })}
      </p>
      {filteredEvents.length > 0 ? (
        <ul>
          {filteredEvents.map((event) => (
            <li
              key={event.id}
              className="mb-3 p-3 rounded-lg"
              style={{ backgroundColor: event.color }}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{event.title}</h3>
                  <p className="text-sm text-gray-600">{event.time}</p>
                </div>
                {event.type === "video" && (
                  <FaVideo className="h-5 w-5 text-gray-500" />
                )}
              </div>
              {event.clientProfile && (
                <div className="mt-2 flex items-center">
                  <FaUser className="h-4 w-4 text-gray-500 mr-1" />
                  <button className="text-xs text-blue-500 hover:text-blue-600">
                    View Client Profile
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No events for this date.</p>
      )}
    </div>
  );
}
