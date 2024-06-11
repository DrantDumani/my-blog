import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

export function NoAuth() {
  const { user } = useAuthContext();
  const { state } = useLocation();
  const navTo = state ? state : "/";
  return !user.token ? <Outlet /> : <Navigate to={navTo} replace={true} />;
}
