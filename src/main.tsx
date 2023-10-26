import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { UserProvider } from "./providers/userContext.tsx";
import { BrowserRouter } from "react-router-dom";
import { AdsProvider } from "./providers/adsContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AdsProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </AdsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
