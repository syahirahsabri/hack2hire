
const PredictionDatas = {
  datas: [
    {
      type: "Daily Electric Usage",
      value: "55 kWh",
    },
    {
      type: "Current Monthly Bill",
      value: "RM 10,351",
    },
    {
      type: "Expected Monthly Bill",
      value: "RM 12,000",
    },
    {
      type: "Current Carbon Emission",
      value: "956 tons",
    },
    {
      type: "Expected Carbon Emission",
      value: "1000 tons",
    },
  ],
};

function PredictionComponent({ data }) {
  return (
    <div
      className="flex flex-col justify-center items-center rounded-lg border border-solid border-black bg-white p-5"
      style={{ boxShadow: "6px 6px rgb(0, 0, 0)" }}
    >
      <p className="text-[#636262]">{data.type}</p>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <h6 className="text-base font-semibold">{data.value}</h6>
        </div>
      </div>
    </div>
  );
}

export default function Prediction() {
  return (
    <section className="relative">
      <div className="p-2 mx-auto max-w-7xl px-5 py-4 md:px-2 lg:py: md:py-6 lg:py-8">
        <div className="mb-0 flex flex-row space-x-3 md:mb-12 lg:mb-0">
          {PredictionDatas.datas.map((data, index) => (
            <PredictionComponent data={data} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
