import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Auth = () => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);
  const handleLogin = () => {
    dispatch({ type: "LOGIN" });
  };

  return (
    <>
      <button
        onClick={handleLogin}
        className="btn btn-primary mt-5"
        style={{ display: `${login ? "none" : "inline-block"}` }}
      >
        Log In
      </button>
      <button
        onClick={handleLogin}
        className="btn btn-primary my-5"
        style={{ display: `${login ? "inline-block" : "none"}` }}
      >
        Log out
      </button>
    </>
  );
};

export default Auth;
