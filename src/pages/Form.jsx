import { QuantityInput } from "../components/QuantityInput";
import { DropDown } from "../components/Dropdown";
import { useState } from "react";
import { Link } from "react-router-dom";

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
  { title: "Lift", levels: ["3", "3", "3"] },
];

function CalculateElectricalUsage() {
  //Calculation!
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

  return (
    <>
      {/* <div className="flex flex-col items-center justify-center mt-5 mb-0">
        <h1 className="text-xl font-bold text-4xl">Modify building info</h1>
      </div> */}
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
                />
              </div>
            ))}
          </div>
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
          type="submit"
          className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </>
  );
}
