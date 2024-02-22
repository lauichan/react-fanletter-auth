import { useEffect, useState } from "react";
import SignUp from "../components/auth/SignUp";
import LogIn from "../components/auth/Login";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Auth() {
  const navigate = useNavigate();
  const { user, error, isError } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user?.accessToken && !isError) {
      localStorage.setItem("accessToken", user.accessToken);
      localStorage.setItem("userId", user.userId);
      localStorage.setItem("avatar", user.avatar);
      localStorage.setItem("nickname", user.nickname);
      navigate("/");
    } else {
      localStorage.clear();
    }
  }, [user]);

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  if (toggle) return <SignUp handleToggle={handleToggle} error={error} isError={isError} />;

  return <LogIn handleToggle={handleToggle} error={error} />;
}

export default Auth;
