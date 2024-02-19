import "./reset.css";
import "./App.css";
import Router from "./shared/Router";
import { useDispatch } from "react-redux";
import { __getFanLetter } from "./store/modules/fanletter";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getFanLetter());
  }, [dispatch]);

  return (
    <>
      <Router />
    </>
  );
}

export default App;
