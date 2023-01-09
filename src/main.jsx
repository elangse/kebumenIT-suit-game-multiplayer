import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Mainkan from "./Route/Home/Mainkan/Mainkan";
import Online from "./Route/Home/Online/Online";
import Tentang from "./Route/Home/Tentang/Tentang";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/offline" element={<Mainkan />} />
      <Route path="/online" element={<Online />} />
      <Route path="/tentang" element={<Tentang />} />
    </Routes>
  </BrowserRouter>
);
