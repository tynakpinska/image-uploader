import React from "react";
import image from "../img/image.svg";
import Radium from "radium";

const styles = {
  box: {
    width: "338px",
    margin: "auto",
    padding: "20px",
    background: "#F6F8FB",
    border: "1px dashed #97BEF4",
    boxSizing: "border-box",
    borderRadius: "12px",
    ":hover": {
      border: "2px solid #97BEF4",
    },
  },
  paragraph: {
    color: "#BDBDBD",
    fontStyle: "Poppins",
    fontSize: "12px",
  },
};

const DragAndDropArea = ({ setImage, setIsLoading }) => {
  const CLOUDINARY_UPLOAD_PRESET = "pgk0nz6q";
  const CLOUDINARY_UPLOAD_URL =
    "https://api.cloudinary.com/v1_1/tynnacloud/upload";

  const uploadImage = image => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    const options = {
      method: "POST",
      body: formData,
    };
    fetch(CLOUDINARY_UPLOAD_URL, options)
      .then(res => res.json())
      .then(res => {
        setImage(res.secure_url);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  };

  const readFile = image => {
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = () => {
        uploadImage(reader.result);
    };
  };

  const dodrop = e => {
    const image = e.dataTransfer.items[0].getAsFile();
    readFile(image);
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
    setIsLoading(true);
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
