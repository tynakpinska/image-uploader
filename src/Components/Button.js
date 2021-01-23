import React from "react";
import Radium from 'radium';

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
    ':hover': {
      cursor: "pointer"
    }
  },
  input: {
    display: "none",
  },
};

const Button = () => {
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
      />
    </>
  );
};


export default Radium(Button);
