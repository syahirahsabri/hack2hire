import { Link } from "react-router-dom";

function PowerBIDashboard() {
  return (
    <iframe
      title="Main Dashboard"
      width="1140"
      height="541.25"
      src="https://app.powerbi.com/reportEmbed?reportId=72d4f8fd-e055-4435-ad79-5ef061a549c6&autoAuth=true&ctid=1f551aeb-7ea1-472c-9ac0-09de9bf33051"
      frameborder="0"
      allowFullScreen="true"
      className="flex flex-col items-center justify-center"
    ></iframe>
  );
}

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-col items-center justify-center px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <div className="mb-8 w-full max-w-3xl text-center md:mb-12 lg:mb-16">
          <h2 className="text-3xl font-bold mb-5 md:text-5xl">👩‍💻</h2>
          <h2 className="text-3xl mb-10 font-bold md:text-5xl">
            Welcome back, Dell!
          </h2>
          <div className="flex flex-col justify-center w-800 items-center z-0 font-bold md:text-5xl">
            <PowerBIDashboard />
          </div>
          {/* <h3 className="text-xl font-bold md:text-3xl">Update data</h3> */}
        </div>

        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-2 lg:w-[50%]">
          {/* First div */}
          <div className="flex max-w-md flex-col items-center justify-center rounded-md border border-[#cdcdcd] p-8">
            {/* <div className="mb-4 rounded-[4px] bg-[#0b0b1f] px-4 py-1.5">
              <p className="text-sm font-bold text-white sm:text-sm">
                Electrical Usage Form
              </p>
            </div> */}
            <p className="mb-6 text-base font-light text-[#636262] md:mb-10 lg:mb-12">
              Your current annual electricity usage is
            </p>
            <h2 className="mb-5 text-3xl font-bold md:mb-6 md:text-5xl lg:mb-12">
              RM 10351
            </h2>
            <Link to={"/form"}>
              <a className="mb-5 w-full rounded-md bg-black px-6 py-3 text-center font-semibold text-white md:mb-6 lg:mb-8">
                Update your building info
              </a>
            </Link>
          </div>

          {/* Second div */}
          <div className="flex max-w-md flex-col items-center justify-center rounded-md border border-[#cdcdcd] bg-[#f2f2f7] p-8">
            {/* <div className="mb-8 rounded-[4px] bg-[#0b0b1f] px-4 py-1.5">
              <p className="text-sm font-bold text-white sm:text-sm">
                Carbon Emission Calculator
              </p>
            </div> */}
            <p className="mb-6 text-base font-light text-[#636262] md:mb-10 lg:mb-12">
              Your current annual carbon emission is
            </p>
            <h2 className="mb-5 text-3xl font-bold md:mb-6 md:text-5xl lg:mb-12">
              956 tons
            </h2>
            <Link to={"/calculator"}>
              <a className="mb-5 w-full rounded-md bg-black px-6 py-3 text-center font-semibold text-white md:mb-6 lg:mb-8">
                Reduce the emissions
              </a>
            </Link>
          </div>
        </div>
        <a
          href="/home"
          className="mb-5 w-[20%] mt-10 py-3 text-center font-semibold text-black md:mb-6 lg:mb-8 hover:bg-white hover:text-black"
        >
          👈🏻 Return to landing
        </a>
      </div>
    </>
  );
}
