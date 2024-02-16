import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-container">
        <ul>
          <li className="nav-ele">Home</li>
          <li className="nav-ele">About Us</li>
          <li className="nav-ele">Contact Us</li>
          <li className="nav-ele">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
