import { useState } from "react";
import Button from "./Button.js";

let getBadge = (isAvailable) =>
  isAvailable ? (
    <span className="badge bg-success" style={{ marginLeft: "40px" }}>
      Available
    </span>
  ) : (
    <span className="badge bg-danger" style={{ marginLeft: "40px" }}>
      Out of stock
    </span>
  );

function ProductDetails(props) {
  let [quantity, updateQuantity] = useState(0);
  let incrementQuantity = () => {
    if (quantity < 10) updateQuantity(++quantity);
    console.log(quantity);
  };
  let decrementQuantity = () => {
    if (quantity > 0) updateQuantity(--quantity);
    console.log(quantity);
  };
  return (
    <div className="d-flex align-items-center jsutify-content-start mt-1">
      <h6 className="font-weight-bold my-2" style={{ marginRight: 30 }}>
        ${props.price}
      </h6>
      <Button eventHandler={decrementQuantity}>-</Button>
      <span style={{ padding: "8px 14px", fontSize: 13 }}>{quantity}</span>
      <Button eventHandler={incrementQuantity}>+</Button>
      {getBadge(props.isAvailable)}
      <h6 className="font-weight-bold my-2" style={{ marginLeft: 30 }}>
        Total: ${props.price * quantity}
      </h6>
    </div>
  );
}

export default ProductDetails;
