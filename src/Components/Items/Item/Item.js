import React from "react";
import Classes from "../Item/Item.module.css";

const Item = ({ name, add, remove }) => {
  return (
    <div>
      <li className={Classes.item}>
        <span>{name}</span>
        <span className={Classes.quantity}>2</span>
        <div className="right">
        {/* onClick={add.bind(this, name)} */}
          <button
            type="button"
            className={[Classes.plus, Classes.rounded].join(" ")}
          >
            +
          </button>
          {/* onClick={remove.bind(this, name)} */}
          <button 
            type="button"
            className={[Classes.minus, Classes.rounded].join(" ")}
          >
            -
          </button>
        </div>
      </li>
    </div>
  );
};
export default Item;
