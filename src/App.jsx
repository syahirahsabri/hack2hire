import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard.jsx";
import Form from "./pages/Form.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import Calculator from "./pages/Calculator.jsx";
import BuildingInfo from "./components/BuildingInfo.jsx";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/form" element={<Form />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/building-info" element={<BuildingInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
