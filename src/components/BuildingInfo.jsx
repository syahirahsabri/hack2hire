import { Link } from "react-router-dom";

export default function BuildingInfo() {
  return (
    <div>
      <a href="/form" className="flex flex-col items-center justify-center">
        <div className="mt-[10%] w-[50%] flex flex-col justify-center items-center border-2 border-black rounded-lg rounded-3xl shadow-xl cursor-pointer transition-transform transform hover:scale-105">
          <img src="src\assets\room.png" />
          <div className="flex flex-row items-center justify-center space-x-8 mb-5">
            <div className="flex flex-col items-center justify-center">
              <p className="text-gray-600">Building Name</p>
              <h1 className="text-xl font-semibold mt-3">Dell</h1>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-gray-600">Levels</p>
              <h1 className="text-xl font-semibold mt-3">3</h1>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-gray-600">Location</p>
              <h1 className="text-xl font-semibold mt-3">Cyberjaya</h1>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
