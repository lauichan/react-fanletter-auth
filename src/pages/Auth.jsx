import { useState } from "react";
import SignUp from "../components/auth/SignUp";
import LogIn from "../components/auth/Login";

function Auth() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  if (toggle) return <SignUp handleToggle={handleToggle} />;

  return <LogIn handleToggle={handleToggle} />;
}

export default Auth;
