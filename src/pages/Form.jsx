import { QuantityInput } from "../components/quantityInput";
import { DropDown } from "../components/dropdown"

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

  const chooseOption1 = 0;
  const chooseOption2 = 1;
  const chooseOption3 = 2;
  const chooseOption4 = 3;
  const chooseOption5 = 4;
  const chooseOption6 = 5;

  const selectedOption = chooseOption6;

  return (
    <div className="bg-white p-4 rounded-md border border-gray-300 shadow-lg">
      <form>
        <div className='mb-4'>
          <label className='mr-2'>Name:</label>
          <input className='border-none mr-2' type='text' defaultValue="Dell" disabled/>
          <label>Building Levels:</label>
          <input className='border-none' type='text' defaultValue="3" disabled/>
        </div>
        
        <div className='flex flex-col justify-between gap-y-6'>
          <div className='mr-14'>
            <DropDown title="Electrical Appliances" options={electricalAppliances} chooseOption={chooseOption1} />
          </div>
          <div>
            <QuantityInput level1="20" level2="10" level3="6" />
          </div>

          <div className='mr-14'>
            <DropDown options={electricalAppliances} chooseOption={chooseOption2} />
          </div>
          <div>
            <QuantityInput level1="40" level2="30" level3="20" />
          </div>

          <div className='mr-14'>
            <DropDown options={electricalAppliances} chooseOption={chooseOption3} />
          </div>
          <div>
            <QuantityInput level1="5" level2="5" level3="5" />
          </div>

          <div className='mr-14'>
            <DropDown options={electricalAppliances} chooseOption={chooseOption4} />
          </div>
          <div>
            <QuantityInput level1="5" level2="20" level3="28" />
          </div>

          <div className='mr-14'>
            <DropDown options={electricalAppliances} chooseOption={chooseOption5} />
          </div>
          <div>
            <QuantityInput level1="4" level2="4" level3="2" />
          </div>

          <div className='mr-14'>
            <DropDown options={electricalAppliances} chooseOption={chooseOption6} />
          </div>
          <div>
            <label><b>Quantity</b></label> <br/>
            <div className='mt-2'>
              <label htmlFor="level_1" className='mr-2'>Level 1:</label>
              <input name="level_1" id="level_1" className='w-[30%] h-8' type='text' defaultValue='3' />
            </div>
            {selectedOption !== chooseOption6 && (
              <div>
                <div className='mt-2'>
                  <label htmlFor="level_2" className='mr-2'>Level 2:</label>
                  <input name="level_2" id="level_2" className='w-[30%] h-8' type='text' defaultValue='20' />
                </div>
                <div className='mt-2'>
                  <label htmlFor="level_3" className='mr-2'>Level 3:</label>
                  <input name="level_3" id="level_3" className='w-[30%] h-8' type='text' defaultValue='20' />
                </div>
              </div>
            )}
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