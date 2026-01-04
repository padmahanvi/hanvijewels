import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Bootstrap Icons
import "bootstrap-icons/font/bootstrap-icons.css";

// Bootstrap JS (for navbar, modal, etc.)
import "bootstrap/dist/js/bootstrap.bundle.min.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
