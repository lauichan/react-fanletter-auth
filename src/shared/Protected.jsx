import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { __getFanLetter } from "../store/modules/fanletter";

function Protected() {
  const dispatch = useDispatch();

  const { user, isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(__getFanLetter());
  }, [dispatch]);

  if (!user?.accessToken || isError) {
    return <Navigate to="/auth" />;
  }

  return <Outlet />;
}

export default Protected;
