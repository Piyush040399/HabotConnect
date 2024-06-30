/* eslint-disable react/prop-types */
const Button = ({
  height,
  width,
  border,
  color = "",
  fontWeight,
  fontSize,
  name,
  backgroundColor = "",
  className = "",
  ...props
}) => {
  return (
    <button
      className={`px-4 py-2 rounded ${className}`}
      style={{
        width: width,
        height: height,
        border: border,
        color: color,
        fontWeight: fontWeight,
        fontSize: fontSize,
        backgroundColor: backgroundColor,
      }}
    >
      {name}

      {props.icon && (
        <img
          src={props.icon}
          alt="icon"
          style={{ paddingRight: props.paddingRight }}
        />
      )}
    </button>
  );
};

export default Button;
