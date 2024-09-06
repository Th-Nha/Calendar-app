import { useState } from "react";
import { formatMonthYear } from "../utils/dateFormat";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function SmallCalendar({ onSelectDate }) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const changeMonth = (increment) => {
    setCurrentMonth(
      new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() + increment,
        1
      )
    );
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    return Array.from({ length: 42 }, (_, i) => {
      const day = i - firstDayOfMonth + 1;
      return day > 0 && day <= daysInMonth ? new Date(year, month, day) : null;
    });
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

  const isSelected = (date) => {
    const selectedDateObj = new Date(selectedDate);
    return (
      date &&
      date.getDate() === selectedDateObj.getDate() &&
      date.getMonth() === selectedDateObj.getMonth() &&
      date.getFullYear() === selectedDateObj.getFullYear()
    );
  };

  return (
    <div className="h-auto bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => changeMonth(-1)}
          className="text-gray-600 hover:text-gray-800"
        >
          <FaChevronLeft className="h-5 w-5" />
        </button>
        <h2 className="text-lg font-semibold text-[#5684AE]">
          {formatMonthYear(currentMonth)}
        </h2>
        <button
          onClick={() => changeMonth(1)}
          className="text-gray-600 hover:text-gray-800"
        >
          <FaChevronRight className="h-5 w-5" />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-8">
        {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
          <div
            key={day}
            className="text-center text-xs font-medium text-gray-400"
          >
            {day}
          </div>
        ))}
        {getDaysInMonth(currentMonth).map((date, index) => (
          <button
            key={index}
            className={`text-center p-1 rounded-full
              ${!date ? "text-gray-300" : ""}
              ${isToday(date) ? "bg-[#5684AE] text-white" : ""}
              ${
                isSelected(date) && !isToday(date)
                  ? "bg-blue-100 text-blue-600"
                  : ""
              }
              ${
                date && !isToday(date) && !isSelected(date)
                  ? "hover:bg-gray-100"
                  : ""
              }
            `}
            onClick={() => {
              if (date) {
                setSelectedDate(date);
                onSelectDate(date);
              }
            }}
            disabled={!date}
          >
            {date ? date.getDate() : ""}
          </button>
        ))}
      </div>
    </div>
  );
}
