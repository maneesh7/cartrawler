import React from "react";
import { Link } from "react-router-dom";
import "./CarCard.scss";
import { getVendorLogo, getCurrencySymbol } from "../../helpers";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import LocalGasStationOutlinedIcon from "@mui/icons-material/LocalGasStationOutlined";
import SettingsInputSvideoOutlinedIcon from "@mui/icons-material/SettingsInputSvideoOutlined";
import Rating from "../Rating";
const CarCard = ({
  id,
  image,
  name,
  seats,
  carModel,
  baggageQuantity,
  totalAmount,
  vendorCode,
  currencyCode,
  transmissionType,
  fuelType,
  vendorData,
}) => {
  return (
    <div className="card">
      <div className="details">
        <div className="carImage">
          <img src={image} alt={image} />
        </div>
        <div className="carDetails">
          <h3 data-testid="carModel">{carModel}</h3>

          <div className="carInfo">
            <div>
              <SettingsInputSvideoOutlinedIcon />
              <span data-testid="transmissionType">{transmissionType}</span>
            </div>
            <div>
              <LocalGasStationOutlinedIcon />
              <span data-testid="fuelType">{fuelType}</span>
            </div>

            <div>
              <GroupAddOutlinedIcon />
              <span data-testid="seats">{seats}</span>
            </div>
            <div>
              <LocalMallOutlinedIcon />
              <span data-testid="baggageQuantity">{baggageQuantity}</span>
            </div>
          </div>
        </div>
        <div className="priceSection">
          <div>Price for 1 day:</div>
          <div className="amount">
            {getCurrencySymbol(currencyCode)}
            {totalAmount}
          </div>

          <Link
            to={`/car/${id}`}
            className="moreDetails"
            data-testid="moreDetails"
          >
            More Details
          </Link>
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
    </div>
  );
};

export default CarCard;
