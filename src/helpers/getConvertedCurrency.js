const getConvertedCurrency = ({ currency, toCurrency, amount }) => {
  let convertedCurrency = 0;
  if (currency === 'CAD') {
    if (toCurrency === 'EUR') {
      convertedCurrency = parseInt(amount) * 0.69;
    } else {
      if (toCurrency === 'US$') {
        convertedCurrency = parseInt(amount) * 0.81;
      }
    }
  } else if (currency === 'EUR') {
    if (toCurrency === 'CAD') {
      convertedCurrency = parseInt(amount) * 1.44;
    } else {
      if (toCurrency === 'US$') {
        convertedCurrency = parseInt(amount) * 1.17;
      }
    }
  } else if (currency === 'US$') {
    if (toCurrency === 'CAD') {
      convertedCurrency = parseInt(amount) * 1.23;
    } else {
      if (toCurrency === 'EUR') {
        convertedCurrency = parseInt(amount) * 0.86;
      }
    }
  }

  return convertedCurrency.toFixed(2);
};

export default getConvertedCurrency;
