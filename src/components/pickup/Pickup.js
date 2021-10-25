import "./Pickup.scss";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import { useGlobalContext } from "../../context";
import Moment from "moment";

function Pickup() {
  const dateFormat = "ddd MMM YYYY HH:mm:ss";
  const { pickupInfo } = useGlobalContext();

  return (
    <div className="pickupBox">
      <div className="pickup">
        <div className="place" data-testid="pickUpLocation">
          {pickupInfo.pickUpLocation}
        </div>
        <div data-testid="pickUpDateTime">
          {Moment(pickupInfo.pickUpDateTime).format(dateFormat)}
        </div>
      </div>
      <div>
        <KeyboardArrowRightOutlinedIcon sx={{ fontSize: 60 }} />
      </div>
      <div className="pickup">
        <div className="place" data-testid="returnLocation">
          {pickupInfo.returnLocation}
        </div>
        <div data-testid="returnDateTime">
          {Moment(pickupInfo.returnDateTime).format(dateFormat)}
        </div>
      </div>
    </div>
  );
}

export default Pickup;
