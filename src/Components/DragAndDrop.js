import React from "react";
import image from "../img/image.svg";

const style = {
    width: "338px",
    height: "218.9px",
    margin: "auto",
    padding: "20px",
    background: "#F6F8FB",
    border: "1px dashed #97BEF4",
    boxSizing: "border-box",
    borderRadius: "12px",
}

const DragAndDrop = () => {
  return (
    <div style={style}>
        <img src={image} alt=""/>
        <p>Drag & Drop your image here</p>
    </div>
  );
};

export default DragAndDrop;
