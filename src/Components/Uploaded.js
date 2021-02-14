import Radium from "radium";
import success from "../img/success-icon.svg";

const style = {
  icon: {
    width: "10%",
  },
  h1: {
    fontSize: "18px",
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
  box: {
    display: "flex",
    border: "1px solid #E0E0E0",
    borderRadius: "8px",
    background: "#F6F8FB",
    whiteSpace: "nowrap",
  },
  p: {
    width: "80%",
    fontSize: "14px",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
};

const Uploaded = ({ image }) => {
  const handleClick = () => {
    const el = document.createElement("textarea");
    el.value = image;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };

  return (
    <>
      <img src={success} alt="" style={style.icon} />
      <h1 style={style.h1}>Uploaded Successfully!</h1>
      <div
        style={{
          borderRadius: "20px",
          width: "90%",
          height: "40vh",
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          margin: "10px auto",
        }}
      />
      <div style={style.box}>
        <p style={style.p}>{image}</p>
        <button style={style.button} onClick={handleClick}>
          Copy Link
        </button>
      </div>
    </>
  );
};

export default Radium(Uploaded);
