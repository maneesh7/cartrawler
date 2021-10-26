const getTransmissionCode = (type) => {
  if (type === 'Automatic') {
    return 100;
  }
  return 101;
};

export default getTransmissionCode;
