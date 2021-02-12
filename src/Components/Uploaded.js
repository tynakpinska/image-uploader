
import Radium from 'radium';

const style = {
  img: {
    width: "100%",
    borderRadius: "20px",
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
    ':hover': {
      cursor: "pointer",
    },
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
      <h1>Uploaded Successfully!</h1>
      <img src={image} alt="" style={style.img} />
      <button style={style.button} onClick={handleClick}>
        Copy Link
      </button>
    </>
  );
};

export default Radium(Uploaded);
