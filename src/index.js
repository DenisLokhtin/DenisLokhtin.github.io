import React from "react";
import ContextWrapper from "./context/ContextWrapper";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ContextWrapper>
    <App />
  </ContextWrapper>
);
