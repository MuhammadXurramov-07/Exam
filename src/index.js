import './lang'
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { LoginContextProvider } from "./Context/loginContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <React.StrictMode>
        <LoginContextProvider>
          <App />
        </LoginContextProvider>
      </React.StrictMode>
    </BrowserRouter>
  </>
);
