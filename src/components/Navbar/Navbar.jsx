import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuthContext, AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

export function Navbar() {
  const { user, logout } = useAuthContext();
  return (
    <nav>
      <Link to="/">Almagorge</Link>
      <Link to="posts">Blog</Link>

      {user.token ? (
        <>
          <button onClick={logout}>Sign Out</button>
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
