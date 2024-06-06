import { createContext, useState, useContext } from "react";

const getUserInfo = () => {
  const info = {
    token: localStorage.getItem("token"),
    username: localStorage.getItem("username"),
    userId: localStorage.getItem("id"),
    isAdmin: localStorage.getItem("isAdmin"),
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

  return (
    <AuthContext.Provider value={{ user, login, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
