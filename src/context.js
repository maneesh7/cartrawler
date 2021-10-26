import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';
import getData from './helpers/getData';

const AppContext = React.createContext();

export const defaultFilter = {
  maxPrice: 1200,
  minPrice: 10,
  lowToHighPrice: true,
  vendors: [],
  transmission: [100],
  currencyCode: 'CAD',
};

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const default_currency_code = 'CAD';
  const [searchFilter, setSearchFilter] = useState(defaultFilter);
  const [carList, setCarList] = useState([]);
  const [pickupInfo, setPickupInfo] = useState({});

  const clearAllFilter = () => {
    setSearchFilter(defaultFilter);
  };

  const changeCurrency = (code) => {
    setSearchFilter({ ...searchFilter, currencyCode: code });
  };

  const getCars = useCallback(async () => {
    setLoading(true);
    try {
      const { filteredCars, pickupData } = getData(searchFilter);
      setPickupInfo(pickupData);
      setCarList(filteredCars);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }, [searchFilter]);

  useEffect(() => {
    getCars();
  }, [searchFilter, getCars]);

  const getCarDetails = (id) => {
    if (carList.length === 0) {
      const { filteredCars } = getData(searchFilter);
      return filteredCars.filter((item) => item.id === id);
    }
    return carList.filter((item) => item.id === id);
  };
  return (
    <AppContext.Provider
      value={{
        loading,
        carList,
        searchFilter,
        setSearchFilter,
        setCarList,
        pickupInfo,
        getCarDetails,
        clearAllFilter,
        default_currency_code,
        changeCurrency,
        // setPriceFilter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export const useMemoizedGlobalContext = React.memo(useGlobalContext);
export { AppContext, AppProvider };
