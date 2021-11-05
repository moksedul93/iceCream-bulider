import React from "react";
import Classes from "../Builder/Builder.module.css";
import Items from "../Items/Items";
import TotalPrice from "../TotalPrice/TotalPrice";
import Modal from "../Builder/Modal/Modal";

const Builder = ({items, price, add, remove}) => {
  return (
    <div>
      <div className={Classes.builder}>
        <h3>Build your own Ice Cream Sundae</h3>
        <Items items={items} />
        <TotalPrice price={price} add={add} remove={remove}/>
        <button
          type="button"
          className={[Classes.order, Classes.rounded].join(" ")}
        >
          Add to Cart
        </button>
      </div>
      <Modal> Hello Modal </Modal>
    </div>
  );
};

export default Builder;
