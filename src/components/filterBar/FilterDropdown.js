import React from 'react';
import { useState } from 'react';
import './FilterDropdown.scss';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { useGlobalContext } from '../../context';
import useClickOutside from '../../hooks/useClickOutside';
import { useRef } from 'react';

const FilterDropdown = () => {
  const LOW_TO_HIGH = 0;
  const HIGH_TO_LOW = 1;
  const RECOMMENDED = 2;

  const [menuActive, setMenuActive] = useState(false);
  const defaultMenuLabel = 'Recommended';
  const dropdownRef = useRef();

  useClickOutside(dropdownRef, () => {
    setMenuActive(false);
  });

  const [menuLabel, setMenuLabel] = useState(defaultMenuLabel);
  const { searchFilter, setSearchFilter } = useGlobalContext();

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const handleClick = (value) => {
    setMenuActive(!menuActive);
    setMenuLabel(
      value === LOW_TO_HIGH
        ? 'Low to High'
        : value === HIGH_TO_LOW
        ? 'High to Low'
        : value === RECOMMENDED
        ? defaultMenuLabel
        : defaultMenuLabel
    );

    console.log(value === HIGH_TO_LOW ? false : true);
    setSearchFilter({
      ...searchFilter,
      lowToHighPrice: value === HIGH_TO_LOW ? false : true,
    });
  };

  return (
    <div ref={dropdownRef} className={`dropdown ${menuActive ? 'active' : ''}`}>
      <button className="dropbtn" onClick={toggleMenu}>
        {menuLabel}
        <KeyboardArrowDownOutlinedIcon />
      </button>
      <div className={`dropdown-content ${menuActive ? 'active' : ''}`}>
        <ul>
          <li onClick={() => handleClick(RECOMMENDED)}>Recommended</li>
          <li onClick={() => handleClick(LOW_TO_HIGH)}> Low to High</li>
          <li onClick={() => handleClick(HIGH_TO_LOW)}> High to Low</li>
        </ul>
      </div>
    </div>
  );
};

export default React.memo(FilterDropdown);
