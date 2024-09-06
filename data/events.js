export const events = [
  {
    id: 1,
    title: "Meeting with Client",
    date: "2024-09-04",
    type: "video",
    color: "#FFF0E6",
    clientProfile: true,
    time: "10:00 AM - 11:00 AM",
  },
  {
    id: 2,
    title: "Team Brainstorming",
    date: "2024-09-04",
    type: "",
    color: "#F9BE81",
    clientProfile: false,
    time: "2:00 PM - 4:00 PM",
  },
  {
    id: 3,
    title: "Product Launch Webinar",
    date: "2024-09-07",
    type: "",
    color: "#5684AE",
    clientProfile: false,
    time: "3:00 PM - 5:00 PM",
  },
  {
    id: 4,
    title: "Annual Review",
    date: "2024-09-12",
    type: "video",
    color: "#F9BE81",
    clientProfile: true,
    time: "9:00 AM - 10:30 AM",
  },
];

export function getEventsByDate(date) {
  return events.filter(
    (event) =>
      event.date.getFullYear() === date.getFullYear() &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getDate() === date.getDate()
  );
}
