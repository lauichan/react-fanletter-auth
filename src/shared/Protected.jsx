import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function Protected() {
  const auth = useSelector((state) => state.auth);

  if (!auth) return <Navigate to="/auth" />;

  return <Outlet />;
}

export default Protected;
