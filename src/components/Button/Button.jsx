import PropTypes from "prop-types";
import styles from "./Button.module.css";

export function Button({
  color = "Default",
  type = "submit",
  name = "",
  value = "",
  children,
  clickHandler = () => {},
}) {
  return (
    <button
      className={`${styles[`btn${color}`]} ${styles.btn}`}
      type={type}
      name={name}
      value={value}
      onClick={clickHandler}
    >
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
