const stats = [
  {
    name: "Daily Electric Usage",
    value: "55 kWh",
    change: "+4.75%",
    changeType: "positive",
  },
  {
    name: "Expected Monthly Bill",
    value: "RM 12,000",
    change: "-1.39%",
    changeType: "positive",
  },
  {
    name: "Expected Carbon Emission",
    value: "1000 tons",
    change: "+10.18%",
    changeType: "negative",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Prediction() {
  return (
    <dl className="flex flex-row items-center justify-center space-x-4 mx-auto p-2">
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
                : "text-gray-700",
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
