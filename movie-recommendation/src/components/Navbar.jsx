import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 text-white text-center">
      <Link to="/" className="px-4">Home</Link>
      <Link to="/trending" className="px-4">Trending</Link>
      <Link to="/top-rated" className="px-4">Top Rated</Link>
    </nav>
  );
};

export default Navbar;
