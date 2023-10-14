import { Listbox } from "@headlessui/react";

export const DropDown = ({
  title,
  options,
  selectedOption,
  onDropdownChange,
}) => {
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
        {({ open }) => (
          <>
            <label className="mt-8 text-sm font-semibold text-gray-900">
              <b>{title}</b>
            </label>
            {/* Div */}
            {/* <div className="relative mt-2">
              <Listbox.Button
                className="w-full cursor-pointer border border-gray-300 rounded-md px-3 py-2 text-left text-gray-700 shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 sm:text-sm"
              >
                <span className="flex items-center">
                  <span className="ml-3 block truncate">{selected.name}</span>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </Listbox.Button>
              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 w-full max-h-60 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {options.map((option) => (
                    <Listbox.Option
                      key={option.id}
                      className={({ active }) =>
                        `${active ? 'bg-indigo-600 text-white' : 'text-gray-700'} cursor-pointer select-none py-2 px-3`
                      }
                      value={option}
                    >
                      {({ selected, active }) => (
                        <div className="flex items-center">
                          <span
                            className={`ml-3 block truncate ${selected ? 'font-semibold' : 'font-normal'}`}
                          >
                            {option.name}
                          </span>
                          {selected ? (
                            <span
                              className={`absolute inset-y-0 right-0 flex items-center pr-4 ${
                                active ? 'text-white' : 'text-indigo-600'
                              }`}
                            >
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </div>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div> */}
          </>
        )}
      </Listbox>
    </div>
  );
};
