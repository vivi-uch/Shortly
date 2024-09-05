import Card from "./Card";

export default function Body() {
  const card = [
    {
      name: "Brand recognition",
      content:
        "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
      src: "images/icon-brand-recognition.svg",
      mTop: "md:translate-y-0",
    },
    {
      name: "Detailed Records",
      content:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
      src: "images/icon-detailed-records.svg",
      mTop: "md:translate-y-10",
    },
    {
      name: "Fully customizable",
      content:
        "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
      src: "images/icon-fully-customizable.svg",
      mTop: "md:translate-y-24",
    },
  ];

  return (
    <div className="bg-gray-custom pt-24 pb-28 text-[20px] px-8 md:px-32">
      <div className="text-center w-full md:w-1/2 flex flex-col justify-center items-center mx-auto">
        <h1 className="font-bold text-[28px] md:text-[36px]">
          Advanced Statistics
        </h1>
        <p className="text-slate-500 text-sm md:text-base">
          Track how your links are performing across the web with our Advanced
          Statistics dashboard.
        </p>
      </div>

      <div className="relative">
        <hr className="hidden border-green-600 md:block absolute w-full md:top-32 border-4"></hr>
        <div className="flex flex-col items-center gap-20 md:gap-6 md:flex-row md:justify-between mt-16 md:my-20 ">
          {card.map((card) => (
            <Card
              key={card.name}
              name={card.name}
              content={card.content}
              src={card.src}
              mTop={card.mTop}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
