export const QuantityInput = ({ level1, level2, level3, showLevels }) => {
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
            {showLevels ? "Level 1" : "" }
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
          className="flex flex-col items-center justify-center w-[20%] h-8 border border-gray-300 rounded-md px-2 py-1 text-gray-700 focus:outline-none"
          defaultValue={0}
          
        />
      </div>
    </div>
  );
};
