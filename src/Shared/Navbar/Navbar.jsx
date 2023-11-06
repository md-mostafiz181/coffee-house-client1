import React from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div id="navbar-part">
      <div className="nav-item flex justify-center items-center ">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <h1 className="lg:text-[60px] md:text-[40px] sm:text-[20px]  primaryFont text-white ms-4">
            Espresso Emporium
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
