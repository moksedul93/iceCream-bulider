import React, { Component } from "react";
import IceCream from "../../Components/IceCream/IceCream";
import Builder from "../../Components/Builder/Builder";
import Classes from "../IceCreamBuilder/IceCreamBuilder.module.css";

export default class IceCreamBuilder extends Component {
  state = {
    items: {
      vanilla: 45,
      chocolate: 50,
      lemon: 35,
      orange: 40,
      strawberry: 60
    },
    scoops: [],
    totalprice: 0
  };
  addScoop = scoop => {
    const { scoops, items } = this.state;
        const workingScoops = [...scoops];
        workingScoops.push(scoop);
        this.setState((prevState) => {
            return {
                scoops: workingScoops,
                totalPrice: prevState.totalPrice + items[scoop],
            };
        });
  };
  removeScoop = scoop => {
    const { scoops, items } = this.state;
    const workingscoops = [...scoops];
    const scoopIndex = workingscoops.indexOf((sc) => sc === scoop);
    workingscoops.splice(scoopIndex, 1);

    this.setState(prevState => {
      return {
        scoops: workingscoops,
        totalprice: prevState.totalprice - items[scoop]
      };
    });
  };
  render() {
    const { items, totalprice } = this.state;
    return (
      <div className={["container", Classes.container].join(" ")}>
        <IceCream />
        <Builder items={items} price={totalprice} add={this.addScoop} remove={this.removeScoop}/>
      </div>
    );
  }
}
