import { Outlet, Navigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

export function NoAuth() {
  const { user } = useAuthContext();
  return !user.token ? <Outlet /> : <Navigate to="/" />;
}
