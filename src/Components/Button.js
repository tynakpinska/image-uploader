import React from "react";
import Radium from "radium";

const style = {
  label: {
    padding: "10px",
    margin: "auto",
    fontStyle: "Noto Sans",
    fontSize: "12px",
    background: "#2F80ED",
    borderRadius: "8px",
    color: "white",
    textAlign: "center",
    lineHeight: "31.98px",
    border: "none",
    ":hover": {
      cursor: "pointer",
    },
  },
  input: {
    display: "none",
  },
};

const Button = ({ setImage, setIsLoading }) => {
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

  const handleChange= e => {
    setIsLoading(true);
    const image = e.target.files[0];
    readFile(image);
  };

  return (
    <>
      <label htmlFor="upload" style={style.label}>
        Choose a file
      </label>
      <input
        id="upload"
        type="file"
        accept="image/png, image/jpeg"
        style={style.input}
        onChange={handleChange}
      />
    </>
  );
};

export default Radium(Button);
