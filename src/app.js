import "./app.css";
import Products from "./components/Products.js";
const logo = require("./images/matlogo.png");

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
  const msg = "Available Icecreams flavours";
  return (
    <div className="row">
      <span className="mainDiv">
        <img src={logo} className="logoImg" alt="logo"></img> &nbsp;&nbsp;{" "}
        <h2>MerryAlph Icecreams</h2>
      </span>
      <p className="mainPara"> {msg} </p>
      <div className="col-lg-8 mx-auto">
        <span className={isWharehouseEmpty() ? "visibleItem" : "hiddenItem"}>
          No products to display. Please add an item
        </span>
        <span className={isWharehouseEmpty() ? "hiddenItem" : "visibleItem"}>
          {items.length} flavours available
        </span>
        <Products
          id={items[0].pID}
          name={items[0].pName}
          description={items[0].desc}
          isAvailable={items[0].isAvailable}
          image={items[0].image}
          price={items[0].price}
        ></Products>
        <Products
          id={items[1].pID}
          name={items[1].pName}
          description={items[1].desc}
          isAvailable={items[1].isAvailable}
          image={items[1].image}
          price={items[1].price}
        ></Products>
        <Products
          id={items[2].pID}
          name={items[2].pName}
          description={items[2].desc}
          isAvailable={items[2].isAvailable}
          image={items[2].image}
          price={items[2].price}
        ></Products>
        <Products
          id={items[3].pID}
          name={items[3].pName}
          description={items[3].desc}
          isAvailable={items[3].isAvailable}
          image={items[3].image}
          price={items[3].price}
        ></Products>
      </div>
    </div>
  );
}

let isWharehouseEmpty = () => {
  console.log("size of items  = " + items.length);
  if (items.length === 0) return true;
  else return false;
};

export default App;
