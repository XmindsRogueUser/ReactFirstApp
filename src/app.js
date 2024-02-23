import "./app.css";
import ProductList from "./components/productList/ProductList.js";
const logo = require("./images/snow.png");

function App() {
  const msg =
    "Indulge in an extraordinary ice cream adventure with MerryAlps, the unrivaled maestro when it comes to ice creams. Welcome to the enchanted realm of MerryAlps, where every frozen creation is a masterpiece waiting to be savoured. From beloved classics to groundbreaking innovations, MerryAlps ice cream caters to a diverse spectrum of tastes and preferences. Join us in exploring the realm of MerryAlps, where the extraordinary is an everyday delight.";
  return (
    <div className="row">
      <span className="mainDiv">
        <img src={logo} className="logoImg" alt="logo"></img> &nbsp;&nbsp;{" "}
        <h2>MerryAlps Icecreams</h2>
      </span>
      <span style={{'marginRight':'53vh'}}>
        <p className="mainPara"><b>{msg}</b></p>
      </span>
      <div className="col-lg-8 mx-auto">
        <ProductList></ProductList>
      </div>
    </div>
  );
}

export default App;
