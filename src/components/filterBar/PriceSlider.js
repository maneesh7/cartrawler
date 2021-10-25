import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useGlobalContext } from "../../context";
import { getCurrencySymbol } from "../../helpers";

const PriceSlider = () => {
  const [value, setValue] = useState([10, 60]);

  const { searchFilter, setSearchFilter } = useGlobalContext();

  const handleChange = (event, newValue) => {
    const [min, max] = value;

    setValue(newValue);

    setSearchFilter({
      ...searchFilter,
      maxPrice: max * 30,
      minPrice: min * 30,
    });
  };

  return (
    <Box className="sliderBox">
      <h4>Price Range</h4>
      <div>
        {getCurrencySymbol(searchFilter.currencyCode)}
        {searchFilter.minPrice} - {getCurrencySymbol(searchFilter.currencyCode)}
        {searchFilter.maxPrice}
      </div>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="off"
      />
    </Box>
  );
};

export default PriceSlider;
