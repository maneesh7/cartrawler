import './Pickup.scss';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { useGlobalContext } from '../../context';
import Moment from 'moment';

function Pickup() {
  const dateFormat = 'ddd MMM YYYY HH:mm:ss';
  const { pickupInfo } = useGlobalContext();

  return (
    <div className="pickupBox">
      <div className="info">
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

      <button onClick={() => alert('this feature is not implemented yet')}>
        <span>Edit Search</span>
      </button>
    </div>
  );
}

export default Pickup;
