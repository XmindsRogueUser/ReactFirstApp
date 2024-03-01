import { useRef } from "react";
import Button from "./productList/Button.js";

function RefsDemo() {
  let nameInputRef = useRef("");

  let showNameEventHandler = () => {
    console.log(nameInputRef.current.value);
  };

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
        <span>Name: </span>
        <input style={{ padding: "5px 5px", margin :"5px"}} type="text" ref={nameInputRef} />
        <Button eventHandler={showNameEventHandler}>Show Name</Button>
      </div>
    </div>
  );
}

export default RefsDemo;
