import { Form } from "react-router-dom";
import PropTypes from "prop-types";

export function RouterForm({ method = "GET", action = "", children }) {
  return (
    <Form method={method} action={action}>
      {children}
    </Form>
  );
}

RouterForm.propTypes = {
  method: PropTypes.string,
  action: PropTypes.string,
  children: PropTypes.any,
};
