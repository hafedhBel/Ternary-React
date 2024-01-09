import React from "react";
import Login from "./Login";

var isLoggedIn = false;

function renderConditionally() {
  if (isLoggedIn === true) {
    return <h1>Hello Daglouch</h1>;
  } else {
    return <Login />;
  }
}
function App() {
  return (
   isLoggedIn===true ? 
  );
}

export default App;
