import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/24/outline";

//Data and information
const calculatorData = {
  options: [
    {
      icon: "🤢",
      label: "Your Building Emissions",
      description: "Current emissions from your nasty building",
      data: {
        electricity: {
          //   title: "Electricity Consumption Per Level",
          totalConsumption: "770 kWh",
          consumptionByLevel: [
            { level: "Level 1", consumption: "50 kWh" },
            { level: "Level 2", consumption: "60 kWh" },
            { level: "Level 3", consumption: "50 kWh" },
          ],
        },
        carbonEmission: {
          //   title: "Carbon Emission Per Level",
          totalEmission: "0.79 tons",
          emissionByLevel: [
            { level: "Level 1", emission: "0.5 tonne" },
            { level: "Level 2", emission: "0.2 tonne" },
            { level: "Level 3", emission: "0.15 tonne" },
          ],
        },
      },
    },
    {
      icon: "🌱",
      label: "Your Greener Building",
      description: "The greener version of your building",
      data: {
        electricity: {
          totalConsumption: "743 kWh",
          consumptionByLevel: [
            { level: "Level 1", consumption: "23 kWh" },
            { level: "Level 2", consumption: "43 kWh" },
            { level: "Level 3", consumption: "12 kWh" },
          ],
        },
        carbonEmission: {
          totalEmission: "0.77 tons",
          emissionByLevel: [
            { level: "Level 1", emission: "0.23 tonne" },
            { level: "Level 2", emission: "0.10 tonne" },
            { level: "Level 3", emission: "0.02 tonne" },
          ],
        },
      },
    },
  ],
};

const description = {
  Suggestion: [
    "Please do this and do that bruh",
    "PLease bruh!",
    "PLease man Im Begging U",
  ],
};

const savingOptions = {
  Improvement: [
    {
      method: "Reduce Lamp/Change to LED",
      savings: "-15% emission!",
    },
    { method: "Reduce AC", savings: "-30% emission!" },
    {
      method: "Reduce Computer/Router",
      savings: "-10% emission!",
    },
  ],
};

// Function to handle data display
function RenderDataBefore({ data, totalPower, totalPowerByLevel }) {
  return (
    <div className="isolate mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
      {Object.keys(data).map((key, index) => (
        <div
          key={index}
          className="rounded-3xl p-6 bg-white border border-gray-200"
        >
          {key === "electricity" ? (
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col justify-center items-center">
                  <p className="text-xl">Total Electricity Consumption</p>
                  <p className="mt-2 text-lg leading-6 text-gray-600">
                    {totalPower} kWh
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center mt-4">
                <ul className="mt-4 text-sm leading-6 text-gray-600 space-y-5">
                  {data[key].consumptionByLevel.map((levelData, levelIndex) => (
                    <li key={levelData.level}>
                      <b>{levelData.level}</b> <br />
                      {totalPowerByLevel[levelIndex].toFixed(2)}
                    </li>
                  ))}
                </ul>
                <div className="w-[70%] ml-14">
                  <img
                    src="src/assets/electricity.png"
                    className="w-[90%] h-[90%]"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                <p className="text-xl">Total Carbon Emission</p>
                <p className="mt-2 text-lg leading-6 text-gray-600">
                  {(totalPower * 0.78).toFixed(2)} gCO₂e/h
                </p>
              </div>
              <div className="flex flex-row items-center justify-center mt-4">
                <div className="flex flex-col justify-center items-center">
                  <ul className="mt-4 text-sm leading-6 text-gray-600 space-y-5">
                    {data[key].emissionByLevel.map((levelData, levelIndex) => (
                      <li key={levelData.level}>
                        <b>{levelData.level}</b> <br />
                        {(totalPowerByLevel[levelIndex] * 0.78).toFixed(2)}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-[70%] ml-14">
                  <img
                    src="src/assets/emission.png"
                    className="w-[90%] h-[90%]"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function RenderDataAfter() {
  return (
    <div className="mt-10 items-center justify-center">
      <div className="flex flex-col justify-center items-center rounded-3xl p-6 bg-white border border-gray-200">
        <img src="src/assets/output.png" className="w-[80%] h-[80%]" />
      </div>
    </div>
  );
}

// Suggestions ---> Extra Box
function WhatYouCanDo() {
  return (
    <div className="isolate mx-auto mt-8 grid grid-cols-1 gap-8 items-center justify-center">
      <div className="flex flex-col items-center justify-center rounded-3xl p-6 bg-white border border-gray-200">
        <p className="text-xl">What You Can Do:</p>
        <ul className="flex flex-col items-center justify-center mt-4 text-sm leading-6 text-gray-600 space-y-5">
          {description.Suggestion.map((suggestion, index) => (
            <li key={index}>{suggestion}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function WhatIWantToChange() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleButtonClick = (index) => {
    setSelectedOption(index);
    setShowConfirm(true);
  };

  const handleConfirm = () => {
    setShowConfirm(false);
  };

  return (
    <div className="isolate mx-auto mt-8 grid grid-cols-1 gap-8 mb-10 items-center justify-center">
      <div className="flex flex-col rounded-3xl p-6 bg-white border border-gray-200 justify-center items-center">
        <p className="text-xl">
          What improvement would you make to the building?
        </p>
        <div className="mt-4 space-x-4 flex flex-row justify-center items-center">
          {savingOptions.Improvement.map((improvement, index) => (
            <div key={index} className="text-center">
              <div className="mb-5">
                <button
                  className={`rounded-lg py-2 px-4 ${
                    selectedOption === index
                      ? "bg-indigo-500 text-white"
                      : "border-2 border-indigo bg-white"
                  } hover:bg-indigo-700`}
                  onClick={() => handleButtonClick(index)}
                >
                  {improvement.method}
                </button>
              </div>
              <div className="mt-5 flex justify-center items-center">
                {selectedOption === index && (
                  <div className="text-gray-600">{improvement.savings}</div>
                )}
              </div>
            </div>
          ))}
        </div>
        {selectedOption !== null && showConfirm && (
          <button
            className="w-[20%] rounded-lg py-2 px-4 mt-4 bg-white-500 border-2 border-white text-black hover:bg-black hover:text-white"
            onClick={handleConfirm}
          >
            Confirm 👌🏼
          </button>
        )}
      </div>
    </div>
  );
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Calculator() {
  const location = useLocation();
  const { totalPowerByLevel, totalPower } = location.state;

  const [openPopUp, setOpenPopUp] = useState(false);

  const [selectedOption, setSelectedOption] = useState(
    calculatorData.options[0]
  );

  const showWhatYouCanChange = selectedOption === calculatorData.options[0];
  const showWhatYouCanDo = selectedOption === calculatorData.options[1];

  return (
    <div className="bg-white items-center justify-center">
      <main>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Carbon Emission Calculator
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
            Reduce Your Carbon Footprint Bro!
          </p>

          {/* Calculator Options */}
          <div className="isolate flex justify-center items-center mx-auto mt-10 max-w-7xl">
            <div className="flex flex-wrap justify-center items-center gap-8 pr-10">
              {/* Render option */}
              {calculatorData.options.map((option, index) => (
                <div
                  key={index}
                  className={classNames(
                    selectedOption === option
                      ? "ring-2 ring-indigo-600"
                      : "ring-1 ring-gray-200",
                    "flex flex-col justify-center items-center rounded-3xl p-6 cursor-pointer transition-transform transform hover:scale-105"
                  )}
                  onClick={() => {
                    setSelectedOption(option);
                    setOpenPopUp(true);
                  }}
                >
                  <h2 className="mb-4 text-lg font-semibold leading-6 text-gray-900">
                    {option.icon}
                  </h2>
                  <h2 className="text-lg font-semibold leading-6 text-gray-900">
                    {option.label}
                  </h2>
                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {option.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Render Data */}
          {openPopUp &&
            (showWhatYouCanChange ? (
              <>
                <RenderDataBefore
                  data={selectedOption.data}
                  totalPower={totalPower}
                  totalPowerByLevel={totalPowerByLevel}
                />
                <WhatIWantToChange />
              </>
            ) : showWhatYouCanDo ? (
              <>
                <RenderDataAfter
                  data={selectedOption.data}
                  totalPower={totalPower}
                  totalPowerByLevel={totalPowerByLevel}
                />
                <div className="my-5 flex flex-col justify-center items-center">
                  <Link to={"/dashboard"}>
                    <HomeIcon
                      className="h-6 w-6 hover:scale-110"
                      aria-hidden="true"
                    />
                  </Link>
                  {/* 
                  <a href="/dashboard" className="text-gray">
                    👈 Return to landing
                  </a> */}
                </div>
              </>
            ) : null)}
        </div>
      </main>
    </div>
  );
}
