import { Navigate, Outlet } from "react-router-dom";

function Protected() {
  const isLogin = false;

  if (!isLogin) return <Navigate to="/auth" />;

  return <Outlet />;
}

export default Protected;
