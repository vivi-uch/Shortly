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
      mTop: "transform translate-y-16",
    },
    {
      name: "Fully customizable",
      content:
        "Improve brand awareness and content discoverabililty though customizable links, supercharging audience engagement",
      src: "images/icon-fully-customizable.svg",
      mTop: "transform translate-y-32",
    },
  ];

  return (
    <div className="bg-gray-custom pt-48 pb-40 text-[24px] px-52">
      <div className="text-center w-1/3 flex flex-col justify-center items-center mx-auto">
        <h1 className="font-bold text-[48px]">Advanced Statistics</h1>
        <p className="text-slate-500">
          Track how your links are performing across the web with our Advanced
          Statistics dashboard
        </p>
      </div>

      <div className="relative">
        <hr className="border-green-600 absolute w-full top-52 border-4"></hr>
        <div className="flex justify-between my-28">
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
