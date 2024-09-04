import Card from "./Card";

export default function Body() {
  const card = [
    {
      name: "Brand recognition",
      content:
        "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links helip instil confidence in yout content",
      src: "images/icon-brand-recognition.svg",
      mTop: "transform translate-y-0",
    },
    {
      name: "Detailed Records",
      content:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions",
      src: "images/icon-detailed-records.svg",
      mTop: "transform translate-y-10",
    },
    {
      name: "Fully customizable",
      content:
        "Improve brand awareness and content discoverabililty though customizable links, supercharging audience engagement",
      src: "images/icon-fully-customizable.svg",
      mTop: "transform translate-y-24",
    },
  ];

  return (
    <div className="bg-gray-custom pt-24 pb-28 text-[20px] px-32">
      <div className="text-center w-1/2 flex flex-col justify-center items-center mx-auto">
        <h1 className="font-bold text-[36px]">Advanced Statistics</h1>
        <p className="text-slate-500">
          Track how your links are performing across the web with our Advanced
          Statistics dashboard
        </p>
      </div>

      <div className="relative">
        <hr className="border-green-600 absolute w-full top-32 border-4"></hr>
        <div className="flex justify-between my-20">
          {card.map((card) => (
            <Card
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
