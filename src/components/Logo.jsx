import logo from "../assets/image 1.png";

// eslint-disable-next-line react/prop-types
const Logo = ({ width, height }) => {
  return <img style={{ width: width, height: height }} src={logo} alt="logo" />;
};

export default Logo;
