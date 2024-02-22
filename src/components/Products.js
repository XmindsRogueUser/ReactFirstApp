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

function Products(props) {
  return (
    <div>
      <ul className="list-group shadow">
        <li className="list-group-item">
          <div className="media align-items-lg-center flex-cloumn flex-lg-row p-3 d-flex">
            <div className="media-body order-2 order-lg-1">
              <h5 className="mt-0 font-weight-bold mb-2">{props.name}</h5>
              <p className="font-italic text-muted mb-8 small">
                {props.description}
              </p>
              <div className="d-flex align-items-center jsutify-content-start mt-1">
                <h6
                  className="font-weight-bold my-2"
                  style={{ marginRight: 30 }}
                >
                  ${props.price}
                </h6>
                <img
                  src={props.image}
                  width="150"
                  alt="icecream"
                  className="ml-lg-5 order-1 order-lg-2 itemImage"
                ></img>
                <button className="btn btn-primary">+</button>
                <span style={{ padding: "8px 14px", fontSize: 13 }}>0</span>
                <button className="btn btn-primary">-</button>
                {getBadge(props.isAvailable)}
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Products;
