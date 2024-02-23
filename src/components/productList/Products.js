import ProductDetails from "./ProductDetails.js";

function Products(props) {
  return (
    <div>
      <li className="list-group-item">
        <div className="media align-items-lg-center flex-cloumn flex-lg-row p-3 d-flex">
          <div className="media-body order-2 order-lg-1">
            <h5 className="mt-0 font-weight-bold mb-2">{props.name}</h5>
            <p className="font-italic text-muted mb-8 small">
              {props.description}
            </p>
            <ProductDetails price={props.price} isAvailable={props.isAvailable}>
              <p>warning! system not live</p>
            </ProductDetails>
          </div>
          <img
            src={props.image}
            width="150"
            alt="icecream"
            className="ml-lg-5 order-1 order-lg-2 itemImage"
          ></img>
        </div>
      </li>
    </div>
  );
}

export default Products;
