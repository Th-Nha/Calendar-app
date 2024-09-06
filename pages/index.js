import { useState } from "react";
import Layout from "../components/Layout";
import SmallCalendar from "@/components/SmallCalendar";
import BigCalendar from "../components/BigCalendar";
import UpcomingEvents from "../components/UpcomingEvents";
import { events } from "@/data/events";

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row bg-gray-100 ">
        <div className="w-full lg:w-1/3 p-4">
          <SmallCalendar onSelectDate={setSelectedDate} />
          <UpcomingEvents selectedDate={selectedDate} events={events} />
        </div>
        <div className="w-full lg:w-2/3 p-4">
          <BigCalendar events={events} />
        </div>
      </div>
    </Layout>
  );
}
