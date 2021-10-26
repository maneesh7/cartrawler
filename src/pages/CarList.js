import React, { useState } from 'react';
import './CarList.scss';
import { useGlobalContext } from '../context';
import CarCard from '../components/cardCard/CarCard';
import Loader from '../components/loader/Loader';
import Pickup from '../components/pickup/Pickup';
import FilterDropdown from '../components/filterBar/FilterDropdown';
import FilterBar from '../components/filterBar/FilterBar';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import CloseIcon from '@mui/icons-material/Close';
const CarList = () => {
  const { carList, loading } = useGlobalContext();
  const [isFullScreen, setIsFullScreen] = useState(false);

  const showFullScreenFilter = () => {
    setIsFullScreen(true);
  };

  const closeFilter = () => {
    setIsFullScreen(false);
  };

  return (
    <div className="main">
      <div className={isFullScreen ? 'filterBox fullScreen' : 'filterBox'}>
        {isFullScreen && (
          <button onClick={closeFilter} className="closeFilter">
            <CloseIcon />
            Close Filter
          </button>
        )}
        <FilterBar />
      </div>
      <div className="resultBox">
        <Pickup />
        <div className="filterRow">
          <button className="fullFilter" onClick={showFullScreenFilter}>
            Filter
            <KeyboardArrowDownOutlinedIcon />
          </button>
          <FilterDropdown />
        </div>

        {loading ? (
          <div className="loadingBar">
            <Loader />
          </div>
        ) : carList.length === 0 ? (
          <div className="noData">
            <WarningAmberIcon /> No data found, please change search criteria
          </div>
        ) : (
          <div className="carList">
            {carList.map((item, index) => {
              return <CarCard key={index} {...item}></CarCard>;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default CarList;
