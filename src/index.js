import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import "./headerfooter.css";
import Header from "./header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);
