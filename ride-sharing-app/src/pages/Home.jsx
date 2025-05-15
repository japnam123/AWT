import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Ride-Sharing App</h1>
      <nav>
        <Link to="/book-ride">Book a Ride</Link> | 
        <Link to="/ride-history">Ride History</Link>
      </nav>
    </div>
  );
};

export default Home;
