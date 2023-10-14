import { useState } from "react";
import { Link } from "react-router-dom";
import { Listbox } from "@headlessui/react";

const electricalAppliances = [
  { id: 1, name: "Air-Conditioner" },
  { id: 2, name: "Pendaflour" },
  { id: 3, name: "CCTV" },
  { id: 4, name: "Computer" },
  { id: 5, name: "Router" },
  { id: 6, name: "Lift" },
];

const dropdownConfigs = [
  { title: "Airconds", levels: ["20", "10", "6"] },
  { title: "Pendaflour", levels: ["40", "30", "20"] },
  { title: "CCTV", levels: ["5", "5", "5"] },
  { title: "Computer", levels: ["5", "20", "3"] },
  { title: "Router/Modem", levels: ["4", "4", "2"] },
  { title: "Lift", levels: ["3", "0", "0"] },
];

const electricalConsumption = [
  { title: "Airconds", power: "0.8" },
  { title: "Pendaflour", power: "0.2" },
  { title: "CCTV", power: "0.015" },
  { title: "Computer", power: "0.021" },
  { title: "Router/Modem", power: "0.0005" },
  { title: "Lift", power: "0.5" },
];

const defaultValue = 3;

function calculateTotalPowerConsumption(
  dropdownConfigs,
  electricalConsumption,
  defaultValue
) {
  if (
    !Array.isArray(dropdownConfigs) ||
    !Array.isArray(electricalConsumption)
  ) {
    console.error("Invalid data format. Arrays are expected.");
    console.log(dropdownConfigs);
    return "Tak dapat value"; // Return 0 or handle the error as needed
  }

  const totalUnitsByComponent = {};
  let totalPowerConsumption = 0;

  dropdownConfigs.forEach((config) => {
    const componentTitle = config.title;
    totalUnitsByComponent[componentTitle] = 0;

    config.levels.forEach((level) => {
      totalUnitsByComponent[componentTitle] += parseInt(level, 10);
    });
  });

  electricalConsumption.forEach((item) => {
    const componentTitle = item.title;
    if (totalUnitsByComponent[componentTitle]) {
      const power = parseFloat(item.power);
      const units = totalUnitsByComponent[componentTitle];
      totalPowerConsumption += power * units * defaultValue;
    }
  });

  return totalPowerConsumption;
}

function QuantityInput({ level1, level2, level3, showLevels }) {
  const [hoursUsed, setHoursUsed] = useState(0);

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setHoursUsed(newValue);
    onInputChange(newValue);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-4 flex flex-col justify-center items-center p-4 rounded-md border border-gray-300 shadow-xl bg-white">
        <label className="text-sm font-medium text-gray-900">
          <b>Quantity</b>
        </label>
        <div className="mt-2 flex flex-col items-center justify-center">
          <label
            htmlFor="level_1"
            className="block text-sm font-medium text-gray-700"
          >
            {showLevels ? "Level 1" : ""}
          </label>
          <input
            name="level_1"
            id="level_1"
            className="w-[20%] h-8 border border-gray-300 rounded-md px-2 py-1 text-gray-700 focus:outline-none"
            type="text"
            defaultValue={level1}
            disabled
          />
        </div>
        {showLevels && (
          <>
            <div className="mt-2 flex flex-col items-center justify-center">
              <label
                htmlFor="level_2"
                className="block text-sm font-medium text-gray-700"
              >
                Level 2
              </label>
              <input
                name="level_2"
                id="level_2"
                className="w-[20%] h-8 border border-gray-300 rounded-md px-2 py-1 text-gray-700 focus:outline-none"
                type="text"
                defaultValue={level2}
                disabled
              />
            </div>
            <div className="mt-2 flex flex-col items-center justify-center">
              <label
                htmlFor="level_3"
                className="block text-sm font-medium text-gray-700"
              >
                Level 3
              </label>
              <input
                name="level_3"
                id="level_3"
                className="w-[20%] h-8 border border-gray-300 rounded-md px-2 py-1 text-gray-700 focus:outline-none"
                type="text"
                defaultValue={level3}
                disabled
              />
            </div>
          </>
        )}
      </div>
      {/* Hours used */}
      <div className="mt-5 flex flex-col justify-center items-center">
        <label className="text-sm font-medium text-gray-900">
          <b>Hours used</b>
        </label>
        <input
          type="text"
          name="level_3"
          id="level_3"
          onChange={handleInputChange}
          value={hoursUsed}
          className="flex flex-col items-center justify-center w-[20%] h-8 border border-gray-300 rounded-md px-2 py-1 text-gray-700 focus:outline-none"
        />
      </div>
    </div>
  );
}

function DropDown({ title, options, selectedOption, onDropdownChange }) {
  const handleChange = (selectedValue) => {
    const selectedOptionIndex = options.findIndex(
      (option) => option.id === selectedValue.id
    );
    onDropdownChange(selectedOptionIndex);
  };

  const selected = options[selectedOption];

  return (
    <div className="w-72 mr-4 flex flex-col items-center justify-center">
      <Listbox value={selected} onChange={handleChange}>
        <>
          <label className="mt-8 text-sm font-semibold text-gray-900">
            <b>{title}</b>
          </label>
        </>
      </Listbox>
    </div>
  );
}

export default function Form() {
  const [selectedOptions, setSelectedOptions] = useState({
    dropdown1: 0,
    dropdown2: 1,
    dropdown3: 2,
    dropdown4: 3,
    dropdown5: 4,
    dropdown6: 5,
  });

  const handleDropdownChange = (dropdownName, optionIndex) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [dropdownName]: optionIndex,
    }));
  };

  const handleCalculator = () => {
    
  }

  return (
    <>
      <div className="mt-10 ml-[13%] bg-white w-[75%] p-4 rounded-md border border-gray-300 shadow-xl">
        <form className="flex flex-col justify-center items-center">
          <div className="flex flex-wrap justify-between p-8 py-3">
            {dropdownConfigs.map((config, index) => (
              <div key={index}>
                <DropDown
                  title={config.title}
                  options={electricalAppliances}
                  selectedOption={selectedOptions[`dropdown${index + 1}`]}
                  onDropdownChange={(optionIndex) =>
                    handleDropdownChange(`dropdown${index + 1}`, optionIndex)
                  }
                />
                <QuantityInput
                  level1={config.levels[0]}
                  level2={config.levels[1]}
                  level3={config.levels[2]}
                  showLevels={selectedOptions[`dropdown${index + 1}`] !== 5}
                  onInputChange={(hours) =>
                    handleHoursChange(`dropdown${index + 1}`, hours)
                  }
                />
              </div>
            ))}
          </div>
          {calculateTotalPowerConsumption(
            dropdownConfigs,
            electricalConsumption,
            defaultValue
          )}
        </form>
      </div>

      {/* Buttons */}
      <div className="mt-14 mb-14 flex items-center justify-center gap-x-6">
        <Link to={"/dashboard"}>
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
        </Link>
        <button
          type="button"
          onClick={() => handleCalculator()}
          className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </>
  );
}
