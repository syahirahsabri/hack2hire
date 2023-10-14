
const PredictionDatas = {
  datas: [
    {
      type: "Daily Electric Usage",
      value: "55 kWh",
    },
    {
      type: "Expected Monthly Bill",
      value: "RM 921",
    },
    {
      type: "Expected Carbon Emission",
      value: "520 tons",
    },
  ],
};

function PredictionComponent({ data }) {
  return (
    <div
      className="flex flex-col justify-center items-center rounded-lg border border-solid border-black bg-white p-6"
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
      <div className="mx-auto max-w-7xl px-5 py-4 md:px-10 md:py-6 lg:py-8">
        <div className="mb-2 flex flex-row space-x-5 md:mb-12 lg:mb-16">
          {PredictionDatas.datas.map((data, index) => (
            <PredictionComponent data={data} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
