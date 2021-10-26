import React from 'react';
import logo from '../../assets/logo.png';
import './NavBar.scss';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context';

const Navbar = () => {
  const { searchFilter, changeCurrency } = useGlobalContext();

  const updateCurrency = (currency) => {
    changeCurrency(currency);
  };

  return (
    <nav className="navbar">
      <Link to={'/'} className="moreDetails">
        {<img src={logo} alt="logo" className="logo" />}
      </Link>

      <div className="currency-dropdown">
        <span>{searchFilter.currencyCode}</span>
        <ul>
          <li
            onClick={() => updateCurrency('EUR')}
            className={`${searchFilter.currencyCode === 'EUR' ? 'active' : ''}`}
          >
            EUR
          </li>
          <li
            onClick={() => updateCurrency('CAD')}
            className={`${searchFilter.currencyCode === 'CAD' ? 'active' : ''}`}
          >
            CAD
          </li>
          <li
            onClick={() => updateCurrency('US$')}
            className={`${searchFilter.currencyCode === 'US$' ? 'active' : ''}`}
          >
            US$
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
