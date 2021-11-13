import React from "react";
import ReactDom from "react-dom";
import App from "./App";

function Index() {
  return (
    <>
      <App />
    </>
  );
}

ReactDom.render(<Index />, document.getElementById("root"));
