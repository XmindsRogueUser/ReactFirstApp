import { useState } from "react";

function ProductForm(props) {
  let [userInput, updateUserInput] = useState({
    name: "",
    price: 0,
    desc: "",
    availability: false,
    image: "",
  });
  let inputHandler = (event) => {
    const { name, value } = event.target;
    updateUserInput((previous) => ({ ...previous, [name]: value }));
  };

  let createProductEventListener = (event) => {
    event.preventDefault();
    let product = {
      pName: userInput.name,
      price: Number(userInput.price),
      desc: userInput.desc,
      availability: Boolean(userInput.availability),
      image: userInput.image,
    };
    updateUserInput({
      name: "",
      price: 0,
      desc: "",
      availability: false,
      image: "",
    });
    props.createProduct(product);
  };

  return (
    <form className="row g-3" onSubmit={createProductEventListener}>
      <div className="col-md-6">
        <label htmlFor="name">Product Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          placeholder="Product Name"
          value={userInput.name}
          onChange={inputHandler}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="price">Product Price</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          className="form-control"
          id="price"
          placeholder="Product Price"
          name="price"
          value={userInput.price}
          onChange={inputHandler}
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Product Description</label>
        <input
          type="text"
          className="form-control"
          name="desc"
          id="description"
          placeholder="Product Description"
          value={userInput.desc}
          onChange={inputHandler}
        />
      </div>

      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          name="availability"
          id="isAvailable"
          checked={userInput.availability}
          onChange={inputHandler}
        />
        <label className="form-check-label" htmlFor="isAvailable">
          Is product available in stock?
        </label>
      </div>

      <div className="form-group">
        <label htmlFor="select-image">Select product image</label>
        <input
          type="file"
          className="form-control"
          name="image"
          id="select-image"
          value={userInput.image}
          onChange={inputHandler}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Add Product
      </button>
    </form>
  );
}
export default ProductForm;
