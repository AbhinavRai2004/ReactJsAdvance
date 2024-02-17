import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [LoginBtn, setLoginBtn] = useState("login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-container">
        <ul>
          <li className="nav-ele">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-ele">
            <Link to="/about">About Us</Link>
          </li>
          <li className="nav-ele">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="nav-ele">Cart</li>
          <button
            className="loginBtn"
            onClick={() => {
              LoginBtn == "login"
                ? setLoginBtn("logout")
                : setLoginBtn("login");
            }}
          >
            {LoginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
