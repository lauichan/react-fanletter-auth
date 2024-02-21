import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function Protected() {
  const { user, isError } = useSelector((state) => state.auth);

  if (!user?.accessToken || isError) {
    return <Navigate to="/auth" />;
  }

  return <Outlet />;
}

export default Protected;
