import React from "react";
import { useSelector } from "react-redux";
import EventCard from "./EventCard";

const EventList = () => {
  const events = useSelector((state) => state.events.events);

  return (
    <div className="container">
      <h1 className="title">🎟️ Event Booking System</h1>
      <div className="event-list">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventList;
