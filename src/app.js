import "./app.css";
import ProductList from "./components/productList/ProductList.js";
import CreateProduct from "./components/createProduct/CreateProduct.js";
import RefsDemo from "./components/RefsDemo.js";
import { useState } from "react";
const logo = require("./images/snow.png");

// let items = []
let items = [
  {
    pID: 1,
    pName: "Chocolate",
    desc: "We believe chocolate ice cream stands the test of time, and it's the best flavor there is.",
    isAvailable: true,
    image: require("./images/chocolate-ice-cream.webp"),
    price: 12,
  },
  {
    pID: 2,
    pName: "Vanilla",
    desc: "Vanilla ice cream is so refreshing on a warm summer's day.",
    isAvailable: false,
    image: require("./images/vanilla-ice-cream.webp"),
    price: 10,
  },
  {
    pID: 3,
    pName: "Strawberry",
    desc: "It's a great flavor if you want a few fruit chunks in your cone or cup",
    isAvailable: true,
    image: require("./images/strawberry-ice-cream.webp"),
    price: 15,
  },
  {
    pID: 4,
    pName: "Mint Chocolate Chip",
    desc: "It's heavenly, so long as you like your ice cream minty!",
    isAvailable: true,
    image: require("./images/mint-chocolate-chip-ice-cream.webp"),
    price: 20,
  },
];

function App() {
  let [newProductList, updateNewProductList] = useState(items);
  const msg =
    "Indulge in an extraordinary ice cream adventure with MerryAlps, the unrivaled maestro when it comes to ice creams. Welcome to the enchanted realm of MerryAlps, where every frozen creation is a masterpiece waiting to be savoured. From beloved classics to groundbreaking innovations, MerryAlps ice cream caters to a diverse spectrum of tastes and preferences. Join us in exploring the realm of MerryAlps, where the extraordinary is an everyday delight.";

  let onCreateProduct = (product) => {
    updateNewProductList([product, ...items]);
    items.push(product);
    console.log(product);
  };
  return (
    <div className="row">
      <span className="mainDiv">
        <img src={logo} className="logoImg" alt="logo"></img> &nbsp;&nbsp;{" "}
        <h2>MerryAlps Icecreams</h2>
      </span>
      <span style={{ marginRight: "53vh" }}>
        <p className="mainPara">{msg}</p>
      </span>
      <div className="col-lg-8 mx-auto">
        <RefsDemo></RefsDemo>
        <CreateProduct createProduct={onCreateProduct}></CreateProduct>
        <ProductList newProductList={newProductList}></ProductList>
      </div>
    </div>
  );
}

export default App;
