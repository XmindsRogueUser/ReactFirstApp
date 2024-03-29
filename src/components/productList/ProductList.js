import React from "react";
import Products from "./Products.js";

function ProductList(props) {
  return props.newProductList.length === 0 ? (
    <React.Fragment>
      <ul className="list-group shadow">
        <span className={"visibleItem"}>
          <h6 style={{ color: "white", margin: "7px" }}>
            No products to display
          </h6>
        </span>
      </ul>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <ul className="list-group shadow">
        <span className={"visibleItem"}>
          <h6 style={{ color: "white", margin: "7px" }}>
            {props.newProductList.length} flavours available
          </h6>
        </span>
        {props.newProductList.map((item, index) => {
          return (
            <Products
              key={index}
              id={item.pID}
              name={item.pName}
              description={item.desc}
              isAvailable={item.isAvailable}
              image={item.image}
              price={item.price}
            ></Products>
          );
        })}
      </ul>
    </React.Fragment>
  );
}
export default ProductList;
