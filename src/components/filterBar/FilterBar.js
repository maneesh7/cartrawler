import React from "react";
import "./FilterBar.scss";
import Slider from "./PriceSlider";
import FilterVendors from "./FilterVendors";
import FilterTransmission from "./FilterTransmission";
import { useGlobalContext } from "../../context";

const FilterBar = () => {
  const { clearAllFilter } = useGlobalContext();

  return (
    <div className="filterBar">
      <div className="filterHead">
        <span>Filter</span>
        <button onClick={clearAllFilter}>Clear all filters</button>
      </div>
      <hr className="divider" />
      <div>
        <Slider />
        <hr className="divider" />
        <FilterVendors />
        <hr className="divider" />
        <FilterTransmission />
      </div>
    </div>
  );
};

export default FilterBar;
