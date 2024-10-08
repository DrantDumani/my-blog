import { createContext, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";

const getUserInfo = () => {
  const info = {
    token: localStorage.getItem("token"),
    username: localStorage.getItem("username"),
    userId: localStorage.getItem("id"),
    isAdmin: localStorage.getItem("role"),
    exp: localStorage.getItem("exp"),
  };
  return info;
};

export const AuthContext = createContext({});

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(getUserInfo());

  const login = () => {
    setUser(getUserInfo);
  };

  const logout = () => {
    setUser({});
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("id");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("exp");
  };

  useEffect(() => {
    const exp = user.exp * 1000;
    if (!exp) return;
    else {
      const delay = exp - Date.now() > 0 ? exp - Date.now() : 0;

      const id = setTimeout(() => {
        if (Date.now() > exp) logout();
      }, delay);

      return () => clearTimeout(id);
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, login, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}

AuthContextProvider.propTypes = {
  children: PropTypes.any,
};
