import React from "react";
import ReactDom from "react-dom";
import Header from "./header.jsx";
import Main from "./main.jsx";
const rootEl = document.getElementById("root");

ReactDom.render(
  <div>
    <Header />
    <Main />
  </div>,
  rootEl
);
