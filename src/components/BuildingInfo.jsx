import { PlusCircleIcon, ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const buildingData = [
  {
    buildingId: 1,
    buildingImage: "src/assets/room.png",
    name: "Dell",
    levels: 3,
    location: "Cyberjaya",
  },
];

export default function BuildingInfo() {
  return (
    <>
      <div className="flex flex-row items-start pl-[10%] mt-[5%]">
        <Link to={"/dashboard"}>
          <ArrowLeftCircleIcon
            className="h-12 w-12 hover:scale-110"
            aria-hidden="true"
          />
        </Link>
      </div>

      {buildingData.map((building, index) => (
        <a
          key={building.buildingId}
          href="/form"
          className="flex flex-col items-center justify-center"
        >
          <div className="mt-[2%] w-[50%] flex flex-col justify-center items-center border-2 border-black rounded-lg rounded-3xl shadow-xl cursor-pointer transition-transform transform hover:scale-105">
            <img src={building.buildingImage} alt="Building Image" />
            <div className="flex flex-row items-center justify-center space-x-8 mb-5">
              <div className="flex flex-col items-center justify-center">
                <p className="text-gray-600">Building Name</p>
                <h1 className="text-xl font-semibold mt-3">{building.name}</h1>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-gray-600">Levels</p>
                <h1 className="text-xl font-semibold mt-3">
                  {building.levels}
                </h1>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-gray-600">Location</p>
                <h1 className="text-xl font-semibold mt-3">
                  {building.location}
                </h1>
              </div>
            </div>
          </div>
          <PlusCircleIcon
            className="block h-12 w-12 mt-14 hover:scale-110"
            aria-hidden="true"
          />
        </a>
      ))}
    </>
  );
}
