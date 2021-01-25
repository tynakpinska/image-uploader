
import LinearProgress from "@material-ui/core/LinearProgress";


const style = {
    backgroundColor: "#cbcbcb",
    height: "10px",
    borderRadius: "8px"
}
  

const Loader = () => {
  return (
    <>
      <h1>Uploading...</h1>
      <LinearProgress style={style}/>
    </>
  );
};

export default Loader;
