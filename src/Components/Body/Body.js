import React from "react";
import Classes from "../Body/Body.module.css";
import IceCreamBuilder from "../../Container/IceCreamBuilder/IceCreamBuilder";

const Body = () => {
  return (
    <div className={Classes.mainBody}>
      <IceCreamBuilder />
    </div>
  );
};
export default Body;
