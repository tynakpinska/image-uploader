import React, { useState } from "react";
import Loader from "./Loader";
import DragAndDropArea from "./DragAndDropArea";
import Button from "./Button";
import Uploaded from "./Uploaded";

const style = {
  div: {
    width: "50vw",
    height: "auto",
    margin: "15vh auto",
    padding: "20px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.5)",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "18px",
    lineHeight: "27px",
    color: "#4F4F4F"
  },
  p: {
    fontSize: "12px",
    color: "#828282"
  }
};

const Container = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState(null);

  return (
    <div style={style.div}>
      {isLoading ? (
        <Loader />
      ) : image ? (
        <Uploaded image={image}/>
      ) : (
        <>
          <h1>Upload your image</h1>
          <p style={style.p}>File should be Jpeg, Png,...</p>
          <DragAndDropArea setIsLoading={setIsLoading} setImage={setImage} />
          <p>Or</p>
          <Button setIsLoading={setIsLoading} setImage={setImage}/>
        </>
      )}
    </div>
  );
};

export default Container;
