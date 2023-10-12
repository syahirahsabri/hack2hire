import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Dashboard from "./pages/Dashboard.jsx";
import Form from "./pages/Form";
import LandingPage from "./pages/LandingPage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<LandingPage />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
