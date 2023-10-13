import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";

import Dashboard from "./pages/Dashboard.jsx";
import Form from "./pages/Form";
import LandingPage from "./pages/LandingPage";
import Calculator from "./pages/Calculator";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<LandingPage />} />
          <Route path="/form" element={<Form />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
