import ProductForm from "./ProductForm.js";

function CreateProduct(props) {
  let onCreateProduct = (product) => {
    props.createProduct(product);
  };
  console.log("form returned");
  return (
    <div className="row">
      <div
        className="col-lg-8 mx-auto"
        style={{
          color: "white",
          backgroundColor: "#222a3a",
          padding: "10px 20px",
          marginBottom: "20px",
        }}
      >
        <ProductForm createProduct={onCreateProduct}></ProductForm>
      </div>
    </div>
  );
}

export default CreateProduct;
