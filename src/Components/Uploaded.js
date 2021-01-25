const style = {
  img: {
    width: "100%",
    borderRadius: "20px"
  },
  button: {
    padding: "10px",
    margin: "auto",
    fontStyle: "Noto Sans",
    fontSize: "12px",
    background: "#2F80ED",
    borderRadius: "8px",
    color: "white",
    textAlign: "center",
    border: "none",
    ":hover": {
      cursor: "pointer",
    },
  },
};

const Uploaded = props => {
  return (
    <>
      <h1>Uploaded Successfully!</h1>
      <img src={props.image} alt="" style={style.img} />
      <button style={style.button}>Copy Link</button>
    </>
  );
};

export default Uploaded;
