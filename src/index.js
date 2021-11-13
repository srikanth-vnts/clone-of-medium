import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import App from "./App";
import 'bootstrap';

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
//import Theme from './Contexts/ThemeContexts';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
