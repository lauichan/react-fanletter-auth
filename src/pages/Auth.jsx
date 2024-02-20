import { useState } from "react";
import SignUp from "../components/auth/SignUp";
import LogIn from "../components/auth/Login";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function Auth() {
  const [toggle, setToggle] = useState(false);
  const user = useSelector((state) => state.auth.user);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  if (user) return <Navigate to="/" />;
  if (toggle) return <SignUp handleToggle={handleToggle} />;

  return <LogIn handleToggle={handleToggle} />;
}

export default Auth;
