import hertz from "../assets/hertz.png";
import alamo from "../assets/alamo.png";
import avis from "../assets/avis.png";

const getVendorLogo = (vendorCode) => {
  let vendorLogo;
  if (vendorCode === "125") {
    vendorLogo = alamo;
  } else if (vendorCode === "1364") {
    vendorLogo = avis;
  } else if (vendorCode === "2338") {
    vendorLogo = hertz;
  }

  return vendorLogo;
};

export default getVendorLogo;
