import React from 'react';
import './CarList.scss';
import { useGlobalContext } from '../context';
import CarCard from '../components/cardCard/CarCard';
import Loader from '../components/Loader';
import Pickup from '../components/pickup/Pickup';
import FilterDropdown from '../components/filterBar/FilterDropdown';
import FilterBar from '../components/filterBar/FilterBar';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const CarList = () => {
  const { carList, loading } = useGlobalContext();

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div className="main">
      <FilterBar />
      <div className="resultBox">
        <Pickup />
        <FilterDropdown />

        {carList.length === 0 ? (
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
