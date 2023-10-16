import { useState } from "react";

import Form from "../pages/Form";
import Calculator from "../pages/Calculator";

export default function FormCalculation() {
  const [calculatorData, setCalculatorData] = useState({
    totalPowerByLevel: [],
    totalPower: 0,
  });

  const updateCalculatorData = (data) => {
    setCalculatorData(data);
  };

  return (
    <div>
      <Form updateCalculatorData={updateCalculatorData} />
      <Calculator
        totalPowerByLevel={calculatorData.totalPowerByLevel}
        totalPower={calculatorData.totalPower}
      />
    </div>
  );
}
