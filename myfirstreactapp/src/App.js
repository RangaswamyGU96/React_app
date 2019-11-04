import React from "react";
// import formatname from "./Mypage.js";
import Clock from "./Mypage.js";
// import logo from "./logo.svg";
import "./App.css";
import Event from "./eventhandler";
import Condition from "./con_render.js";
import Form from "./Form";
import "./css/style.css";

function App() {
  return (
    <div>
      <Clock />
      <Event />
      <Condition />
      <Form />
    </div>
  );
}

export default App;
