import React from "react";
import input from "./Input";

function Login(props) {
  return (
    <form className="form">
      <input type={props.text} placeholder={props.placeholder} />
      <input />
      <button type="submit">Login</button>
    </form>
  );
}
export default Login;
