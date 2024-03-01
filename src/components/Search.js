import { useRef, useEffect } from "react";
import Button from "./productList/Button.js";

function Search(props) {
  let nameInputRef = useRef();

  let search = (key) => {
    let filteredList =
      key === ""
        ? props.newProductList
        : props.newProductList.filter((item) =>
            item.pName.toLowerCase().startsWith(key)
          );
    props.filteredList(filteredList);
  };

  let showNameEventHandler = () => {
    search(nameInputRef.current.value);
    localStorage.setItem("savedkey", nameInputRef.current.value);
  };

  // Retain search result at page load
  useEffect(() => search(props.lastKey), []);

  return (
    <div className="row">
      <div
        className="col-lg-8 mx-auto"
        style={{
          color: "white",
          backgroundColor: "#222a3a",
          padding: "10px 20px",
          marginBottom: "20px",
          borderRadius: "5px",
        }}
      >
        <div>
          <input
            style={{
              borderRadius: "5px",
              width: "80%",
              marginRight: 20,
              alignSelf: "center",
            }}
            type="text"
            placeholder={props.lastKey}
            ref={nameInputRef}
          />
          <Button eventHandler={showNameEventHandler}>search</Button>
        </div>
      </div>
    </div>
  );
}

export default Search;
