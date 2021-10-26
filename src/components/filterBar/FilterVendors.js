import React from 'react';
import vendors from '../../data/vendorsData';
import { useGlobalContext } from '../../context';
import CheckboxGroup from '../checkboxGroup/CheckboxGroup';
import './FilterVendors.scss';

const FilterVendors = () => {
  const { searchFilter, setSearchFilter } = useGlobalContext();

  const handleChange = (data) => {
    setSearchFilter({
      ...searchFilter,
      vendors: data,
    });
  };

  const ved = vendors.map((item) => {
    return { name: item.name, id: item.code, checked: false };
  });

  return (
    <div>
      <h4>Vendors</h4>
      <CheckboxGroup
        data={ved}
        handleData={handleChange}
        selectedItem={searchFilter.vendors}
      />
    </div>
  );
};

export default FilterVendors;
