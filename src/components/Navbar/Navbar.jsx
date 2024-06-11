import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuthContext } from "../../context/AuthContext";
import styles from "./Navbar.module.css";

export function Navbar() {
  const location = useLocation();

  const { user, logout } = useAuthContext();
  return (
    <nav className={styles.nav}>
      <Link className={`${styles.navLink} ${styles.logo}`} to="/">
        Almagorge
      </Link>
      <Link className={`${styles.navLink} ${styles.marLeft}`} to="posts">
        Blog
      </Link>

      {user.token ? (
        <>
          <button className={styles.navBtn} onClick={logout}>
            Sign Out
          </button>
        </>
      ) : (
        <>
          <Link className={styles.navLink} to="login" state={location.pathname}>
            Login
          </Link>
          <Link
            className={styles.navLink}
            to="signup"
            state={location.pathname}
          >
            Sign Up
          </Link>
        </>
      )}
    </nav>
  );
}

Navbar.propTypes = {
  token: PropTypes.string,
  clickHandler: PropTypes.func,
};
