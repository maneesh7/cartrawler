const getCurrencySymbol = (currencyCode) => {
  let currencySymbol = '$';
  if (currencyCode === 'CAD') {
    currencySymbol = 'C$';
  } else if (currencyCode === 'EUR') {
    currencySymbol = '€';
  } else if (currencyCode === 'US$') {
    currencySymbol = '$';
  }

  return currencySymbol;
};

export default getCurrencySymbol;
