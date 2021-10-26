import React from 'react';
import { Link } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './Home.scss';
const Home = () => {
  return (
    <div className="searchNow">
      <Link to={'/carList'}>
        <h2>
          Start Search <KeyboardArrowRightIcon />
        </h2>
      </Link>
    </div>
  );
};
export default Home;
