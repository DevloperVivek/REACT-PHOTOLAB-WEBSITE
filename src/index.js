import React, { Fragment } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { SearchProvider } from "./Context/context";

const root = createRoot(document.getElementById("root"));

root.render(
  <Fragment>
    <SearchProvider>
      <App />
    </SearchProvider>
  </Fragment>
);
