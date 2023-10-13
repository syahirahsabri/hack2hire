import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="flex flex-col items-center px-5 py-16 md:px-10 md:py-24 lg:py-32">
      <div className="mb-8 w-full max-w-3xl text-center md:mb-12 lg:mb-16">
        <h2 className="text-3xl font-bold mb-5 md:text-5xl">👩‍💻</h2>
        <h2 className="text-3xl font-bold md:text-5xl">Welcome back, Dell!</h2>
        <p className="mt-4 text-sm text-[#636262] sm:text-base">
          Access or modify your building details here.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-2 lg:w-[50%]">
        {/* First div */}
        <div className="flex max-w-md flex-col items-start rounded-md border border-[#cdcdcd] p-8">
          <div className="mb-4 rounded-[4px] bg-[#0b0b1f] px-4 py-1.5">
            <p className="text-sm font-bold text-white sm:text-sm">
              Electrical Usage Form
            </p>
          </div>
          <p className="mb-6 text-base font-light text-[#636262] md:mb-10 lg:mb-12">
            Using your current building configuration, your current electricity
            cost is
          </p>
          <h2 className="mb-5 text-3xl font-bold md:mb-6 md:text-5xl lg:mb-8">
            RM 10351<span className="text-sm font-light sm:text-sm">/year</span>
          </h2>
          <Link to={"/form"}>
            <a className="mb-5 w-full rounded-md bg-black px-6 py-3 text-center font-semibold text-white md:mb-6 lg:mb-8">
              Update your building info
            </a>
          </Link>
        </div>

        {/* Second div */}
        <div className="flex max-w-md flex-col items-start rounded-md border border-[#cdcdcd] bg-[#f2f2f7] p-8">
          <div className="mb-4 rounded-[4px] bg-[#0b0b1f] px-4 py-1.5">
            <p className="text-sm font-bold text-white sm:text-sm">
              Carbon Emission Calculator
            </p>
          </div>
          <p className="mb-6 text-base font-light text-[#636262] md:mb-10 lg:mb-12">
            With your current electricity usage, you are currently emitting
          </p>
          <h2 className="mb-5 text-3xl font-bold md:mb-6 md:text-5xl lg:mb-8">
            956 tons<span className="text-sm font-light sm:text-sm">/year</span>
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
  );
}
