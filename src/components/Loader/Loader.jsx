import { RotatingLines } from "react-loader-spinner";
const Loader = () => {
  return (
    <RotatingLines
      visible={true}
      height="200"
      width="200"
      color="grey"
      strokeWidth="5"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default Loader;
