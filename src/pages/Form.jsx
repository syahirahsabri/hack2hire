import { QuantityInput } from "../components/quantityInput";
import { DropDown } from "../components/dropdown";
import { useState } from "react";

const electricalAppliances = [
  {
    id: 1,
    name: 'Air-Conditioner',
  },
  {
    id: 2,
    name: 'Pendaflour',
  },
  {
    id: 3,
    name: 'CCTV',
  },
  {
    id: 4,
    name: 'Computer',
  },
  {
    id: 5,
    name: 'Router',
  },
  {
    id: 6,
    name: 'Lift',
  },
];

const dropdownConfigs = [
  { title: "Electrical Appliances", level: ["20", "10", "6"] },
  { title: "Electrical Appliances", level: ["40", "30", "20"] },
  { title: "Electrical Appliances", level: ["5", "5", "5"] },
  { title: "Electrical Appliances", level: ["5", "20", "3"] },
  { title: "Electrical Appliances", level: ["4", "4", "2"] },
  { title: "Electrical Appliances", level: ["3", "3", "3"] },
];

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
    <div className="bg-white p-4 rounded-md border border-gray-300 shadow-xl">
      <form>
        <div className='mb-4'>
          <label className='mr-2'>Name:</label>
          <input className='border-none mr-2' type='text' defaultValue="Dell" disabled/>
          <label>Building Levels:</label>
          <input className='border-none' type='text' defaultValue="3" disabled/>
        </div>
        
        <div className='flex flex-col justify-between gap-y-6'>
          {dropdownConfigs.map((config, index) => (
            <div key={index} className='mr-14'>
              <DropDown
                title={config.title}
                options={electricalAppliances}
                selectedOption={selectedOptions[`dropdown${index + 1}`]}
                onDropdownChange={(optionIndex) =>
                  handleDropdownChange(`dropdown${index + 1}`, optionIndex)
                }
              />
              <QuantityInput
                level1={config.level[0]}
                level2={config.level[1]}
                level3={config.level[2]}
                showLevels={selectedOptions[`dropdown${index + 1}`] !== 5}
              />
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
