import React from 'react';
import { Link } from 'react-router-dom';
import './CarDetails.scss';
import { getVendorLogo, getCurrencySymbol } from '../helpers';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import LocalGasStationOutlinedIcon from '@mui/icons-material/LocalGasStationOutlined';
import SettingsInputSvideoOutlinedIcon from '@mui/icons-material/SettingsInputSvideoOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import SensorDoorOutlinedIcon from '@mui/icons-material/SensorDoorOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import Rating from '../components/Rating';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../context';
import Pickup from '../components/pickup/Pickup';
import Loader from '../components/Loader';

const CarDetails = () => {
  const { id } = useParams();

  const { getCarDetails, loading } = useGlobalContext();

  if (loading)
    return (
      <div className="carList">
        <Loader />
      </div>
    );

  const {
    image,
    seats,
    carModel,
    baggageQuantity,
    totalAmount,
    vendorCode,
    currencyCode,
    transmissionType,
    fuelType,
    vendorData,
    doorCount,
    airCondition,
  } = getCarDetails(id)[0];

  return (
    <div className="car">
      <div className="goBack">
        <Link to={'/carList'} className="moreDetails" data-testid="moreDetails">
          <ArrowBackIosNewIcon fontSize="small" />
          Back
        </Link>
      </div>
      <Pickup />
      <h2>Your Trip</h2> <hr className="divider" />
      <h3>{carModel}</h3>
      <div className="details">
        <div className="carImage">
          <img src={image} alt={image} />
        </div>
        <div className="carDetails">
          <div className="carInfo">
            <div>
              <SettingsInputSvideoOutlinedIcon /> {transmissionType}
            </div>
            <div>
              <LocalGasStationOutlinedIcon /> {fuelType}
            </div>

            <div>
              <GroupAddOutlinedIcon /> {seats} Seats
            </div>
            <div>
              <SensorDoorOutlinedIcon /> {doorCount} Doors
            </div>
            <div>
              <AcUnitOutlinedIcon />
              AC {airCondition === 'true' ? 'Yes' : 'No'}
            </div>

            <div>
              <LocalMallOutlinedIcon />
              {baggageQuantity} Baggage
            </div>
          </div>
        </div>
        <div className="priceSection">
          <div>Price for 1 day:</div>
          <div className="amount">
            {getCurrencySymbol(currencyCode)}
            {totalAmount}
          </div>
        </div>
      </div>
      <div className="reviewRow">
        <img src={getVendorLogo(vendorCode)} alt="" />
        <div className="rating">
          <Rating rating={vendorData.rating} />
        </div>
        <div className="reviews">
          <div className="status">Very Good</div>
          <div className="userReview">{vendorData.reviews}+ reviews</div>
        </div>
      </div>
      <hr className="divider" />
      <div className="moreInfo">
        <h3>Your Reservation Price includes</h3>
        <ul>
          <li>
            <CheckOutlinedIcon fontSize="small" color="success" />
            Basic Collision Damage Protection (Excess to 1500,00 EUR)
          </li>
          <li>
            <CheckOutlinedIcon fontSize="small" color="success" />
            Basic Theft Protection (Excess to 1500,00 EUR)
          </li>
          <li>
            <CheckOutlinedIcon fontSize="small" color="success" />
            All Mandatory Charges
          </li>
          <li>
            <CheckOutlinedIcon fontSize="small" color="success" />
            Premium Station Surcharge
          </li>
          <li>
            <CheckOutlinedIcon fontSize="small" color="success" />
            VAT included
          </li>
        </ul>
      </div>
      <div className="insurance">
        <div>
          <CheckCircleOutlineOutlinedIcon />
        </div>
        <div className="insuranceDetails">
          <span>Good news: Full Insurance is available!</span>
          <span>
            Covers bumps, scrapes and much more. Book everything in one place,
            quickly and easily.
          </span>
        </div>
      </div>
      <div className="moreInfo">
        <h3>Your Reservation Price excludes</h3>
        <ul>
          <li>
            <CheckOutlinedIcon fontSize="small" color="success" />
            Super Collision Damage Protection 105,00 EUR per rental
          </li>
          <li>
            <CheckOutlinedIcon fontSize="small" color="success" />
            Fuel: Return the vehicle with the same level of fuel or use our
            refuelling service (price communicated at pick-up)
          </li>
          <li>
            <CheckOutlinedIcon fontSize="small" color="success" />
            An excess on your credit card will be requested at your arrival in
            station.
          </li>
        </ul>
      </div>
      <div className="bookRow">
        <button className="book">
          <span className="bookNow">Book Now</span>
          <span> with Insurance (10% discount)</span>
        </button>
        <button className="book">
          <span className="bookNow">Book Now</span>
          <span> without Insurance</span>
        </button>
      </div>
    </div>
  );
};

export default CarDetails;
