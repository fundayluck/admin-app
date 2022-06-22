import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../ahooks/useAuth";

const ProtectedRoute = () => {
  const { auth } = useAuth();

  return auth?.user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
