import { useFetcher } from "react-router-dom";
import PropTypes from "prop-types";

export function RouterForm({ method = "GET", children }) {
  const fetcher = useFetcher();
  return <fetcher.Form method={method}>{children}</fetcher.Form>;
}

RouterForm.propTypes = {
  method: PropTypes.string,
  action: PropTypes.string,
  children: PropTypes.any,
};
