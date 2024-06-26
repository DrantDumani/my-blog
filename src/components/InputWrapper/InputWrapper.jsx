import { useId } from "react";
import styles from "./InputWrapper.module.css";
import PropTypes from "prop-types";

export function InputWrapper({
  label,
  defaultValue = null,
  type = "text",
  name,
  isRequired = true,
  placeholder = null,
  minLength = null,
  maxLength = null,
}) {
  const id = useId();

  const input =
    type === "textarea" ? (
      <textarea
        rows={6}
        className={styles.input}
        id={id}
        name={name}
        defaultValue={defaultValue}
        required={isRequired}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
      />
    ) : (
      <input
        className={styles.input}
        id={id}
        name={name}
        defaultValue={defaultValue}
        type={type}
        required={isRequired}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
      />
    );

  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      {input}
    </div>
  );
}

InputWrapper.propTypes = {
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  placeholder: PropTypes.string,
  minLength: PropTypes.string,
  maxLength: PropTypes.string,
};
