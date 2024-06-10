import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuthContext } from "../../context/AuthContext";

export function Navbar() {
  const location = useLocation();

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
          <Link to="login" state={location.pathname}>
            Login
          </Link>
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
