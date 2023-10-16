// const PredictionDatas = {
//   datas: [
//     {
//       type: "Daily Electric Usage",
//       value: "55 kWh",
//     },
//     {
//       type: "Current Monthly Bill",
//       value: "RM 10,351",
//     },
//     {
//       type: "Expected Monthly Bill",
//       value: "RM 12,000",
//     },
//     {
//       type: "Current Carbon Emission",
//       value: "956 tons",
//     },
//     {
//       type: "Expected Carbon Emission",
//       value: "1000 tons",
//     },
//   ],
// };

// function PredictionComponent({ data }) {
//   return (
//     <div
//       className="flex flex-col justify-center items-center rounded-lg border border-solid border-black bg-white p-5"
//       style={{ boxShadow: "6px 6px rgb(0, 0, 0)" }}
//     >
//       <p className="text-[#636262]">{data.type}</p>
//       <div className="flex flex-row">
//         <div className="flex flex-col">
//           <h6 className="text-base font-semibold">{data.value}</h6>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function Prediction() {
//   return (
//     <section className="relative">
//       <div className="p-2 mx-auto max-w-7xl px-5 py-4 md:px-2 lg:py: md:py-6 lg:py-8">
//         <div className="mb-0 flex flex-row space-x-3 md:mb-12 lg:mb-0">
//           {PredictionDatas.datas.map((data, index) => (
//             <PredictionComponent data={data} key={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

const stats = [
  {
    name: "Revenue",
    value: "$405,091.00",
    change: "+4.75%",
    changeType: "positive",
  },
  {
    name: "Overdue invoices",
    value: "$12,787.00",
    change: "+54.02%",
    changeType: "negative",
  },
  {
    name: "Outstanding invoices",
    value: "$245,988.00",
    change: "-1.39%",
    changeType: "positive",
  },
  {
    name: "Expenses",
    value: "$30,156.00",
    change: "+10.18%",
    changeType: "negative",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Prediction() {
  return (
    <dl className="mx-auto grid grid-cols-1 gap-px bg-gray-900/5 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.name}
          className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8"
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
