import React from "react";
import image from "../img/image.svg";
import Radium from 'radium';

const styles = {
  box: {
    width: "338px",
    margin: "auto",
    padding: "20px",
    background: "#F6F8FB",
    border: "1px dashed #97BEF4",
    boxSizing: "border-box",
    borderRadius: "12px",
    ':hover': {
      border: "2px solid #97BEF4"
    }
  },
  paragraph: {
    color: "#BDBDBD",
    fontStyle: "Poppins",
    fontSize: "12px",
  }
};

const DragAndDropArea = props => {
  const displayImage = image => {
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = () => {
      setTimeout(() => {
        props.setImage(reader.result);
        props.setIsLoading(false);
      }, 2000);
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
    props.setIsLoading(true);
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

export default Radium(DragAndDropArea);
