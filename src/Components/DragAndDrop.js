import React from "react";
import image from "../img/image.svg";

const styles = {
  box: {
    width: "338px",
    margin: "auto",
    padding: "20px",
    background: "#F6F8FB",
    border: "1px dashed #97BEF4",
    boxSizing: "border-box",
    borderRadius: "12px",
  },
  paragraph: {
    color: "#BDBDBD",
    fontStyle: "Poppins",
    fontSize: "12px",
  }
};

const DragAndDrop = () => {
  const displayImage = image => {
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = () => {
      const img = document.createElement("img");
      img.style.width = "100%";
      img.src = reader.result;
      document.getElementById("output").appendChild(img);
    };
  };

  const dodrop = e => {
    const image = e.dataTransfer.items[0].getAsFile();
    displayImage(image);
  };

  const handleDragEnter = e => {
    e.stopPropagation();
    e.preventDefault();
  };

  const handleDragOver = e => {
    e.stopPropagation();
    e.preventDefault();
  };

  const handleDrop = e => {
    e.stopPropagation();
    e.preventDefault();
    dodrop(e);
  };

  return (
    <div
      style={styles.box}
      id="output"
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <img src={image} alt="" />
      <p style={styles.paragraph}>Drag & Drop your image here</p>
    </div>
  );
};

export default DragAndDrop;
