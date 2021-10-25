import vendorsData from "../data/vendorsData";

const getVendorData = (vendorCode) => {
  let rating = {};
  vendorsData.map((item) => {
    if (parseInt(item.code) === parseInt(vendorCode)) {
      rating = { rating: item.rating, reviews: item.reviews };
    }
  });
  return rating;
};

export default getVendorData;
