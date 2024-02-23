import { useState } from "react";

function ProductForm(props) {
  let [userInput, updateUserInput] = useState({
    name: "",
    price: 0,
    desc: "",
    availability: false,
    image: "",
  });

  let nameInputHandler = (event) => {
    //updateName(event.target.value)
    // updateUserInput({...userInput, name: event.target.value});
    // console.log(event.target.value);
    updateUserInput((previous) => {
      return { ...previous, name: event.target.value };
    });
  };
  let priceInputHandler = (event) => {
    updateUserInput((previous) => {
      return { ...previous, price: event.target.value };
    });
  };
  let descInputHandler = (event) => {
    updateUserInput((previous) => {
      return { ...previous, desc: event.target.value };
    });
  };
  let availabilityInputHandler = (event) => {
    updateUserInput((previous) => {
      return { ...previous, availability: event.target.checked };
    });
  };
  let imageInputHandler = (event) => {
    updateUserInput((previous) => {
      return { ...previous, image: event.target.value };
    });
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
          placeholder="Product Name"
          value={userInput.name}
          onChange={nameInputHandler}
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
          value={userInput.price}
          onChange={priceInputHandler}
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Product Description</label>
        <input
          type="text"
          className="form-control"
          id="description"
          placeholder="Product Description"
          value={userInput.desc}
          onChange={descInputHandler}
        />
      </div>

      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="isAvailable"
          checked={userInput.availability}
          onChange={availabilityInputHandler}
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
          id="select-image"
          value={userInput.image}
          onChange={imageInputHandler}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Add Product
      </button>
    </form>
  );
}
export default ProductForm;
