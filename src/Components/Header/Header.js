import React from "react";
import Classes from "./Header.module.css"
import Logo from "../../assets/images/logo.svg";
import ReactLogo from "../../assets/images/react.svg"

const Header = () => {
  return (
    <header>
      <div className="container" id="header">
        <div>
          <img className={Classes.logo} src={Logo} alt="Logo" />
        </div>
        <div className="textRight">
          <img src={ReactLogo} alt="React" className={Classes.reactLogo} />
          <strong>React</strong>
        </div>
      </div>
    </header>
  );
};

export default Header;
