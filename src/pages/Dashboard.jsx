import { Link } from "react-router-dom";
import Prediction from "../components/Prediction.jsx";

function PowerBIDashboard() {
  return (
    <>
      <iframe
        title="Full Dashboard"
        width="1300"
        height="700"
        className="border-2 border-black"
        src="https://app.powerbi.com/reportEmbed?reportId=00ffccd9-4c97-494b-913f-53996629335b&autoAuth=true&ctid=1f551aeb-7ea1-472c-9ac0-09de9bf33051"
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
        <div className="mb-8 w-full max-w-3xl text-center md:mb-12 lg:mb-16">
          <h2 className="text-3xl font-bold mb-5 md:text-5xl">👩‍💻</h2>
          <h2 className="text-3xl mb-5 font-bold md:text-5xl">
            Welcome back, Dell!
          </h2>
          <div className="mb-5 w-[100%]">
            <Prediction />
          </div>
          <div className="flex flex-col justify-center w-800 items-center z-0 font-bold md:text-5xl">
            <PowerBIDashboard />
          </div>
          <div className="p-2 mb-6">
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
      </div>
    </>
  );
}
