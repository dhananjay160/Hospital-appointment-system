import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// we use react-router-dom for connecting multiple pages...
import { BrowserRouter } from "react-router-dom";
import AppContextProvider from "./context/AppContext.jsx";
createRoot(document.getElementById("root")).render(
  //After using this tag we use react - router-dom in our web application...
  <BrowserRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </BrowserRouter>
);
