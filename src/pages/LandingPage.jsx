import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="bg-white flex flex-col justify-center items-center p-20 mt-28">
      <main className="isolate">
        <div className=" mt-32 px-6 lg:px-8">
          <div className="mt- mx-auto max-w-2xl text-center">
            <h2 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Carbon Emission is BAD 🫨
            </h2>
            <h3 className="mt-4 text-3xl">
              Excessive electricity consumption <br /> makes things worse 🤦‍♀️
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
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Login <span aria-hidden="true">→</span>
              </a>
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
