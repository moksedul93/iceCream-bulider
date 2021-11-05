import React from "react";
import Classes from "../IceCream/IceCream.module.css";
import Scoop from "../IceCream/Scoop/Scoop";

const IceCream = () => {
  // const flavors=Object.keys(items)
  return (
    <div>
      <div className={Classes.icecream}>
        <p className={Classes.cone}></p>
        {/* <p>Please start adding scoops</p> */}
        {/* {flavors.map((flavor)=><Scoop key={flavor} scoop={flavor} />)} */}
        <Scoop />
        <div className={Classes.cherry}></div>
      </div>
    </div>
  );
};

export default IceCream;
