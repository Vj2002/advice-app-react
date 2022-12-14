import React from "react";
import { createRoot } from "react-dom/client";
// import { ReactDOM } from "react-dom";

import App from "./App";
// import "./styles.css";

// ReactDOM.render(<App />, document.getElementById("root"));

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
