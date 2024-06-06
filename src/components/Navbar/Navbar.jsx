import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export function Navbar({ token, clickHandler }) {
  return (
    <nav>
      <Link to="/">Almagorge</Link>
      <Link to="posts">Blog</Link>

      {token ? (
        <>
          <button onClick={clickHandler}>Sign Out</button>
        </>
      ) : (
        <>
          <Link to="login">Login</Link>
          <Link to="signup">Sign Up</Link>
        </>
      )}
    </nav>
  );
}

Navbar.propTypes = {
  token: PropTypes.string,
  clickHandler: PropTypes.func,
};
