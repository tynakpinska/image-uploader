import React from "react";

const style = {
  width: "101px",
  height: "31.98px",
  margin: "auto",
  fontStyle:"Noto Sans",
  fontSize: "12px",
  background: "#2F80ED",
  borderRadius: "8px",
  color: "white",
  textAlign: "center",
  lineHeight: "31.98px"
}

const Button = () => {
  return (
    <div style={style}>
        Choose a file
    </div>
  );
};

export default Button;
