import "../css/DropDownBtn.css";


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
      <option value="Monday">Monday</option>
      <option value="Tuesday">Tuesday</option>
      <option value="Wednesday">Wednesday</option>
      <option value="Thursday">Thursday</option>
      <option value="Friday">Friday</option>
      <option value="Saturday">Saturday</option>
      <option value="Sunday">Sunday</option>
    </select>
  );
};
export default DropDownBtn;

