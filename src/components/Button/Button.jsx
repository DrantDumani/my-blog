import PropTypes from "prop-types";

export function Button({
  color = "Default",
  type = "submit",
  name = "",
  value = "",
  children,
  clickHandler = () => {},
}) {
  return (
    <button type={type} name={name} value={value} onClick={clickHandler}>
      {children}
    </button>
  );
}

Button.propTypes = {
  color: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  children: PropTypes.string,
  clickHandler: PropTypes.func,
};
