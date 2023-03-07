import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Helmet } from "react-helmet";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Helmet>
      <title>Naels</title>
      <meta name="description" content="life is too short for boring nails" />
      <meta name="keywords" content="Naels, React.js, metadata" />
      <meta property="og:title" content="Naels" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="life is too short for boring nails" />
      <meta property="og:url" content="https://naels.vercel.app/" />
    </Helmet>
    <App />
  </React.StrictMode>
);
