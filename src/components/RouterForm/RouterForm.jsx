import { Form } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./RouterForm.module.css";

export function RouterForm({ method = "GET", action = "", children }) {
  return (
    <Form className={styles.form} method={method} action={action}>
      {children}
    </Form>
  );
}

RouterForm.propTypes = {
  method: PropTypes.string,
  action: PropTypes.string,
  children: PropTypes.any,
};
