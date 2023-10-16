import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "transparent",
      }}
      className="bg-white flex flex-col justify-center items-center"
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          backgroundImage: `url(src/assets/bg.jpeg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          // filter: "blur(2px)",
        }}
      />
      <main className="isolate bg-white p-14 rounded-lg border border-gray-300 shadow-xl outline-dotted outline-2 outline-offset-2 outline-white">
        <div className=" mt-4 px-6 lg:px-8">
          <div className=" mx-auto max-w-2xl text-center">
            <h2 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              <span className="text-[#355E3B]">Eco</span>Solve 🌲
            </h2>
            <h3 className="mt-4 text-3xl">
              Excessive electricity consumption <br /> makes things worse
            </h3>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              One way to combat climate change is by reducing electricity
              consumption. Lowering your energy use helps to decrease carbon
              emissions and their negative impact on the environment.
            </p>
            <div className="flex flex-col space-y-8 mt-8 flex items-center justify-center gap-x-6">
              <Link to={"/dashboard"}>
                <a className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  View dashboard
                </a>
              </Link>
            </div>
          </div>
          <div
            className="absolute left-1/2 right-0 top-full -z-10 hidden -translate-y-1/2 transform-gpu overflow-hidden blur-3xl sm:block"
            aria-hidden="true"
          ></div>
        </div>
      </main>
    </div>
  );
}
