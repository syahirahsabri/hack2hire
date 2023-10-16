const stats = [
  {
    name: "Daily Electric Usage",
    value: "366 kWh",
    change: "+4.00%",
    changeType: "negative",
  },
  {
    name: "Expected Monthly Bill",
    value: "RM 8755",
    change: "-1.92%",
    changeType: "positive",
  },
  {
    name: "Expected Monthly Carbon Emission",
    value: "0.2628 tons/m",
    change: "-1.97%",
    changeType: "positive",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Prediction() {
  return (
    <dl className="flex flex-row items-center justify-center space-x-4 mx-auto pb-5">
      {stats.map((stat) => (
        <div
          key={stat.name}
          className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-2 border rounded-xl border-solid border-black bg-white p-6 [box-shadow:rgb(0,_0,_0)_9px_9px] lg:mb-4"
        >
          <dt className="text-sm font-medium leading-6 text-gray-500">
            {stat.name}
          </dt>
          <dd
            className={classNames(
              stat.changeType === "negative"
                ? "text-rose-600"
                : "text-green-700",
              "text-xs font-medium"
            )}
          >
            {stat.change}
          </dd>
          <dd className="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
