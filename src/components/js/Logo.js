import "../css/Logo.css";
import logo from "../../images/WorkoutCompanion.png";

function Logo() {
  return (
    <div className="logo-container">
      <img src={logo} alt="logo" />
    </div>
  );
}

export default Logo;
