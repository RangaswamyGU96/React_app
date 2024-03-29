import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
// const name = "Ranga";
// const element = <h1>hello {name}!!</h1>;
// ReactDOM.render(element, document.getElementById("root"));
// function Clock(props) {
//   return (
//     <div>
//       <h1>Now time is : {props.date.toLocaleTimeString()}</h1>
//     </div>
//   );
// }

// function tick() {
//   ReactDOM.render(<Clock date={new Date()} />, document.getElementById("root"));
// }
// setInterval(tick, 1000);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
