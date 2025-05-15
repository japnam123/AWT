import { useSelector } from "react-redux";

const RideHistory = () => {
  const rides = useSelector((state) => state.rides.rides);

  return (
    <div>
      <h1>Ride History</h1>
      <ul>
        {rides.map((ride) => (
          <li key={ride.id}>
            Location: {ride.location}, Fare: ${ride.fare}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RideHistory;
