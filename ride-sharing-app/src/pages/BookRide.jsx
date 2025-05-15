import { useDispatch } from "react-redux";
import { bookRide } from "../redux/rideSlice";

const BookRide = () => {
  const dispatch = useDispatch();

  const handleBookRide = () => {
    const newRide = { id: Date.now(), location: "New York", fare: 20 };
    dispatch(bookRide(newRide));
  };

  return (
    <div>
      <h1>Book a Ride</h1>
      <button onClick={handleBookRide}>Confirm Booking</button>
    </div>
  );
};

export default BookRide;
