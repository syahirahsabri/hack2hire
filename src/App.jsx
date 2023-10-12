import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Dashboard from "./pages/Dashboard.jsx";
import Form from "./pages/form";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Dashboard />} />
          <Route path="/Form" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
