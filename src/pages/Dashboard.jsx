import { Link } from "react-router-dom";
import Prediction from "../components/Prediction.jsx";

function PowerBIDashboard() {
  return (
    <>
      <iframe
        title="Full Dashboard"
        width="1140"
        height="541.25"
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
      <div className="flex flex-col items-center justify-center px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <div className="mb-8 w-full max-w-3xl text-center md:mb-12 lg:mb-16">
          <h2 className="text-3xl font-bold mb-5 md:text-5xl">👩‍💻</h2>
          <h2 className="text-3xl mb-5 font-bold md:text-5xl">
            Welcome back, Dell!
          </h2>
          <div>
            <Prediction />
          </div>
          <div className="flex flex-col justify-center w-800 items-center z-0 font-bold md:text-5xl">
            <PowerBIDashboard />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-2 lg:w-[50%] mb-8 bg-white p-4 rounded-md border border-gray-300 shadow-xl">
          {/* Form div */}
          <div className="flex max-w-md flex-col items-center justify-center rounded-md border border-[#cdcdcd] p-8">
            <p className="mb-6 text-base font-light text-[#636262] md:mb-10 lg:mb-12">
              Your current annual electricity usage (RM) is
            </p>
            <h2 className="mb-5 text-3xl font-semibold md:mb-6 md:text-5xl lg:mb-6">
              117.44K
            </h2>
            {/* <Link to={"/form"}>
              <a
                className="inline-block rounded-xl bg-black px-8 py-4 text-center font-semibold text-white"
                style={{ boxShadow: "6px 6px rgb(192,192,192)" }}
              >
                Update your building info
              </a>
            </Link> */}
          </div>

          {/* Calculator div */}
          <div className="flex max-w-md flex-col items-center justify-center rounded-md border border-[#cdcdcd] p-8">
            <p className="mb-6 text-base font-light text-[#636262] md:mb-10 lg:mb-12">
              Your current annual carbon emission (gCO₂e/h) is
            </p>
            <h2 className="mb-5 text-3xl font-semibold md:mb-6 md:text-5xl lg:mb-6">
              12.48K
            </h2>
            {/* <Link to={"/calculator"}>
              <a
                className="inline-block rounded-xl bg-black px-8 py-4 text-center font-semibold text-white"
                style={{ boxShadow: "6px 6px rgb(192,192,192)" }}
              >
                Reduce the emissions
              </a>
            </Link> */}
          </div>
        </div>
        <Link to={"/form"}>
              <a
                className="inline-block rounded-xl bg-black px-8 py-4 text-center font-semibold text-white"
                style={{ boxShadow: "6px 6px rgb(192,192,192)" }}
              >
                Reduce your building emissions now!
              </a>
            </Link>
        <a
          href="/"
          className="mb-5 w-[20%] mt-5 py-3 text-center font-semibold text-black md:mb-6 lg:mb-8 hover:bg-white hover:text-black"
        >
          👈🏻 Return to landing
        </a>
      </div>
    </>
  );
}
