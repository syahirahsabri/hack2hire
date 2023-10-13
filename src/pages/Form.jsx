import { QuantityInput } from "../components/quantityInput";
import { DropDown } from "../components/dropdown"
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
]

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
          <div className='mr-14'>
            <DropDown
            title="Electrical Appliances"
            options={electricalAppliances}
            selectedOption={selectedOptions.dropdown1}
            onDropdownChange={(optionIndex) =>
              handleDropdownChange("dropdown1", optionIndex)
            }
            />
          </div>
          <div>
            <QuantityInput
              level1="20"
              level2="10"
              level3="6"
              showLevels={selectedOptions.dropdown1 !== 5}
            />
          </div>

          <div className='mr-14'>
            <DropDown
              options={electricalAppliances}
              selectedOption={selectedOptions.dropdown2}
              onDropdownChange={(optionIndex) =>
                handleDropdownChange("dropdown2", optionIndex)
              }
            />
          </div>
          <div>
            <QuantityInput
              level1="40"
              level2="30"
              level3="20"
              showLevels={selectedOptions.dropdown2 !== 5}
            />
          </div>

          <div className='mr-14'>
            <DropDown
              options={electricalAppliances}
              selectedOption={selectedOptions.dropdown3}
              onDropdownChange={(optionIndex) =>
                handleDropdownChange("dropdown3", optionIndex)
              }
            />
          </div>
          <div>
            <QuantityInput
              level1="5"
              level2="5"
              level3="5"
              showLevels={selectedOptions.dropdown3 !== 5}
            />
          </div>

          <div className='mr-14'>
            <DropDown
              options={electricalAppliances}
              selectedOption={selectedOptions.dropdown4}
              onDropdownChange={(optionIndex) =>
                handleDropdownChange("dropdown4", optionIndex)
              }
            />
          </div>
          <div>
            <QuantityInput
              level1="5"
              level2="20"
              level3="3"
              showLevels={selectedOptions.dropdown4 !== 5}
            />
          </div>

          <div className='mr-14'>
            <DropDown
              options={electricalAppliances}
              selectedOption={selectedOptions.dropdown5}
              onDropdownChange={(optionIndex) =>
                handleDropdownChange("dropdown5", optionIndex)
              }
            />
          </div>
          <div>
            <QuantityInput
              level1="4"
              level2="4"
              level3="2"
              showLevels={selectedOptions.dropdown5 !== 5}
            />
          </div>

          <div className='mr-14'>
            <DropDown
              options={electricalAppliances}
              selectedOption={selectedOptions.dropdown6}
              onDropdownChange={(optionIndex) =>
                handleDropdownChange("dropdown6", optionIndex)
              }
            />
          </div>
          <div>
            <QuantityInput
              level1="3"
              level2="3"
              level3="3"
              showLevels={selectedOptions.dropdown6 !== 5}
            />
          </div>
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
  )
}