import { useState } from "react";
import { formatMonthYear } from "../utils/dateFormat";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function BigCalendar({ events }) {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const changeMonth = (increment) => {
    setCurrentMonth(
      new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() + increment,
        1
      )
    );
  };
  const handleToday = () => {
    setCurrentMonth(today);
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    return Array.from({ length: 35 }, (_, i) => {
      const day = i - firstDayOfMonth + 1;
      return day > 0 && day <= daysInMonth ? new Date(year, month, day) : null;
    });
  };

  const getEventsForDate = (date) => {
    return events.filter(
      (event) => new Date(event.date).toDateString() === date.toDateString()
    );
  };

  const isToday = (date) => {
    const today = new Date();
    return (
      date &&
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <button
            onClick={() => {
              handleToday();
            }}
            class="text-blue-700 hover:text-white border border-blue-500 hover:bg-blue-500  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
          >
            Today
          </button>
          <button onClick={() => changeMonth(-1)} className="mr-2">
            <FaChevronLeft className="h-5 w-5 text-gray-600" />
          </button>
          <button onClick={() => changeMonth(1)} className="ml-2">
            <FaChevronRight className="h-5 w-5 text-gray-600" />
          </button>
          <h2 className="text-xl font-semibold text-[#5684AE]">
            {formatMonthYear(currentMonth)}
          </h2>
        </div>
        <select
          id="countries"
          class="bg-[#5684AE]  text-white text-sm rounded-lg focus:ring-white focus:border-white  p-2.5 dark:text-white  "
        >
          <option selected>Month</option>
          <option value="US">Week</option>
        </select>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div
            key={day}
            className="text-center font-medium text-gray-500 pb-1 border-b"
          >
            {day}
          </div>
        ))}
        {getDaysInMonth(currentMonth).map((date, index) => (
          <div
            key={index}
            className={`h-20 border p-1 ${isToday(date) ? "bg-blue-50" : ""}`}
          >
            {date && (
              <>
                <div className="text-center text-sm text-gray-500">
                  {date.getDate()}
                </div>
                <div className="mt-1">
                  {getEventsForDate(date).map((event) => (
                    <div
                      key={event.id}
                      className="text-xs p-1 mb-1 rounded truncate"
                      style={{ backgroundColor: event.color }}
                    >
                      {event.title}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
