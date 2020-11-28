import React from "react";
import "./styles.css";
import Auth from "./components/Auth";
import Balance from "./components/Balance";
import Banking from "./components/Banking";
import { useSelector } from "react-redux";

function App() {
  const checkLogin = useSelector((state) => state.login);

  return (
    <div className="App my-auto h-100">
      <Auth />
      <Balance />
      <Banking />
    </div>
  );
}

export default App;
