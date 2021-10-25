import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="searchNow">
      <Link to={"/carList"}>
        <h2>Start Search</h2>
      </Link>
    </div>
  );
};
export default Home;
