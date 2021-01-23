import React from "react";
import DragAndDrop from "./DragAndDrop";
import Button from "./Button";

const style = {
  width: "50vw",
  height: "auto",
  margin: "15vh auto",
  padding: "20px",
  borderRadius: "20px",
  textAlign: "center",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.5)",
  fontFamily: "'Poppins', sans-serif",
  fontSize: "18px",
  lineHeight: "27px",
  color: "#4F4F4F"
  
}

const Container = () => {
  return (
    <div style={style}>
      <h1>Upload your image</h1>
      <p>File should be Jpeg, Png,...</p>
      <DragAndDrop/>
      <p>Or</p>
      <Button/>
    </div>
  );
};

export default Container;
