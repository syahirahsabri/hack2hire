import { Link } from "react-router-dom";
import Prediction from "../components/Prediction.jsx";

function PowerBIDashboard() {
  return (
    <>
      <iframe
        title="Full Dashboard"
        width="1300"
        height="800"
        src="https://app.powerbi.com/view?r=eyJrIjoiOTg1MjEzODItZWYwYy00ZmI2LWJjN2YtNDMzMGM4OGI1MzJhIiwidCI6IjFmNTUxYWViLTdlYTEtNDcyYy05YWMwLTA5ZGU5YmYzMzA1MSIsImMiOjEwfQ%3D%3D"
        // frameborder="100"
        allowFullScreen="true"
      />
    </>
  );
}

export default function Dashboard() {
  return (
    <>
    
      <div className="flex flex-col items-center justify-center px-5 py-16 md:px-10 md:py-24 lg:py-20">
        <div className="mb-5 w-full max-w-3xl text-center md:mb-12 lg:mb-16">
          <h2 className="text-3xl font-bold mb-2 md:text-5xl">👩‍💻</h2>
          <h2 className="text-3xl mb-2 font-bold md:text-5xl">
            Welcome back, Dell!
          </h2>
        </div>
        <div className="mb-5">
            <Prediction />
          </div>
          <div className="flex flex-col justify-center w-800 items-center z-0 font-bold md:text-5xl">
            <PowerBIDashboard />
          </div>
          <div className="p-2 mt-4">
            <Link to={"/form"}>
              <a
                className="inline-block rounded-xl bg-black px-8 py-4 text-center font-semibold text-white"
                style={{ boxShadow: "6px 6px rgb(192,192,192)" }}
              >
                Update your building info
              </a>
            </Link> 
          </div>
      </div>
    </>
  );
}
