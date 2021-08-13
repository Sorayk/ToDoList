import "../css/DropDownBtn.css";
import { weekdays } from '../../constants';

const DropDownBtn = ({ onChange }) => {
  return (
    <select 
      id="weekdays"
      required
      onChange={(e) => onChange(e.target.value)}
    >
      {/* <option className="option" value="" hidden>
        ASSIGN WEEKDAY
      </option> */}
      {weekdays.map((day) => <option value={day}>{day}</option>)}
      
    </select>
  );
};
export default DropDownBtn;

