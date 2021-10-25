import React from "react";
import transmissionData from "../../data/transmissionData";
import { useGlobalContext } from "../../context";
import CheckboxGroup from "../checkboxGroup/CheckboxGroup";

const FilterTransmission = () => {
  const { searchFilter, setSearchFilter } = useGlobalContext();
  const handleChange = (data) => {
    setSearchFilter({
      ...searchFilter,
      transmission: data,
    });
  };

  return (
    <div>
      <h4>Transmission</h4>
      <CheckboxGroup
        data={transmissionData}
        handleData={handleChange}
        selectedItem={searchFilter.transmission}
      />
    </div>
  );
};

export default FilterTransmission;
