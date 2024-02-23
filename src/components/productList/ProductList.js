import Products from "./Products.js";

function ProductList(props) {
  return (
    <div>
      <ul className="list-group shadow">
        <span className={"visibleItem"}>
          <h6 style={{ color: "white", margin: "7px" }}>
            {props.newProductList.length} flavours available
          </h6>
        </span>
        {props.newProductList.map((item) => {
          return (
            <Products
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
    </div>
  );
}
export default ProductList;