import React from "react";
import { useDispatch } from "react-redux";
import { bookEvent, cancelBooking } from "../redux/eventSlice";

const EventCard = ({ event }) => {
  const dispatch = useDispatch();

  return (
    <div className="event-card">
      <h3>{event.name}</h3>
      <p>Available: {event.available}</p>
      <p>Booked: {event.booked}</p>
      <div className="buttons">
        <button
          className="book-btn"
          onClick={() => dispatch(bookEvent(event.id))}
          disabled={event.available === 0}
        >
          Book
        </button>
        <button
          className="cancel-btn"
          onClick={() => dispatch(cancelBooking(event.id))}
          disabled={event.booked === 0}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EventCard;
