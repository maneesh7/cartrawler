import data from '../data/data';
import getVendorData from './getVendorData';
import getConvertedCurrency from './getConvertedCurrency';
import getTransmissionCode from './getTransmissionCode';

const getDataFromCT = async () => {
  const res = await fetch('http://www.cartrawler.com/ctabe/cars.json');
  const dataFromUrl = await res.json();
  return dataFromUrl[0];
};

const getData = async (searchFilter) => {
  const mode = 1;
  const { VehAvailRSCore } = mode === 0 ? data[0] : await getDataFromCT();
  const { VehRentalCore, VehVendorAvails: carVendorList } = VehAvailRSCore;

  const {
    '@PickUpDateTime': pickUpDateTime,
    '@ReturnDateTime': returnDateTime,
    PickUpLocation,
    ReturnLocation,
  } = VehRentalCore;

  const pickupData = {
    pickUpDateTime,
    returnDateTime,
    returnLocation: ReturnLocation['@Name'],
    pickUpLocation: PickUpLocation['@Name'],
  };

  const cars = carVendorList.reduce((array, item, i) => {
    const { VehAvails, Vendor } = item;
    const { '@Code': vendorCode, '@Name': vendorName } = Vendor;
    const availableCars = VehAvails.map((item, j) => {
      const { '@Status': status, Vehicle, TotalCharge } = item;

      const {
        '@AirConditionInd': airCondition,
        '@TransmissionType': transmissionType,
        '@FuelType': fuelType,
        '@DriveType': driveType,
        '@PassengerQuantity': seats,
        '@BaggageQuantity': baggageQuantity,
        '@Code': code,
        '@CodeContext': codeContext,
        '@DoorCount': doorCount,
        VehMakeModel,
        PictureURL: image,
      } = Vehicle;
      const { '@Name': carModel } = VehMakeModel;

      const {
        '@RateTotalAmount': amount,
        '@EstimatedTotalAmount': estAmount,
        '@CurrencyCode': currencyCode,
      } = TotalCharge;

      const vendorData = getVendorData(vendorCode);
      const totalAmount =
        currencyCode === searchFilter.currencyCode
          ? amount
          : getConvertedCurrency({
              currency: currencyCode,
              toCurrency: searchFilter.currencyCode,
              amount,
            });

      return {
        id: `${i}${j}`,
        status,
        airCondition,
        transmissionType,
        fuelType,
        driveType,
        seats,
        baggageQuantity,
        code,
        codeContext,
        doorCount,
        carModel,
        image,
        totalAmount,
        estAmount,
        currencyCode: searchFilter.currencyCode,
        vendorCode,
        vendorName,
        pickupData,
        vendorData,
      };
    });
    return [...array, ...availableCars];
  }, []);

  cars.sort((a, b) => {
    if (searchFilter.lowToHighPrice) {
      return a.totalAmount - b.totalAmount;
    } else {
      return b.totalAmount - a.totalAmount;
    }
  });

  const filteredCars = cars.filter((item) => {
    return (
      item.totalAmount <= searchFilter.maxPrice &&
      item.totalAmount >= searchFilter.minPrice &&
      (searchFilter.vendors.length === 0 ||
        searchFilter.vendors.includes(parseInt(item.vendorCode))) &&
      searchFilter.transmission.includes(
        getTransmissionCode(item.transmissionType)
      )
    );
  });

  return { filteredCars, pickupData };
};

export default getData;
