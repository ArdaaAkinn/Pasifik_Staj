import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Article } from "./Article";
import { Trending } from "./Trending";
import { Health } from "./Health";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/article/:name" element={<Article />} />
        <Route path="/Trending" element={<Trending />} />
        <Route path="/Health" element={<Health />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
