export default function Contact() {
  const cardList = [
    {
      heading: "Features",
      text1: "Link Shortening",
      text2: "Branded Links",
      text3: "Analytics",
      text4: "",
    },
    {
      heading: "Resources",
      text1: "Blog",
      text2: "Developers",
      text3: "Support",
      text4: "",
    },
    {
      heading: "Company",
      text1: "About",
      text2: "Our team",
      text3: "Careers",
      text4: "Contact",
    },
  ];

  const contactimag = [
    {
      src: "images/icon-facebook.svg",
      name: "facebook",
    },
    {
      src: "images/icon-twitter.svg",
      name: "twitter",
    },
    {
      src: "images/icon-pinterest.svg",
      name: "pinterest",
    },
    {
      src: "images/icon-instagram.svg",
      name: "instagram",
    },
  ];
  return (
    <div className="flex flex-col gap-10 mb-0 bg-Very-Dark-Violet justify-center py-8 items-center cursor-pointer md:flex-row md:px-32 md:py-12 md:justify-between md:items-start">
      <div>
        <h1 className="text-[30px] md:text-[40px] font-bold text-white p-0 leading-none">
          Shortly
        </h1>
      </div>
      <div className="flex flex-col text-center gap-3 md:flex-row md:gap-20 md:text-left">
        {cardList.map((card) => (
          <FooterCard
            heading={card.heading}
            text1={card.text1}
            text2={card.text2}
            text3={card.text3}
            text4={card.text4}
          />
        ))}
      </div>
      <div className="flex gap-4">
        {contactimag.map((logo) => (
          <img src={logo.src} alt={logo.name} className="w-4 h-4 font-bold" />
        ))}
      </div>
    </div>
  );
}

function FooterCard({ heading, text1, text2, text3, text4 }) {
  return (
    <div className="flex flex-col gap-1">
      <h3 className="text-sm mb-2 md:mb-4 text-white md:text-xl font-bold">
        {heading}
      </h3>
      <p className="text-xs text-gray-custom md:text-lg">{text1}</p>
      <p className="text-xs text-gray-custom md:text-lg">{text2}</p>
      <p className="text-xs text-gray-custom md:text-lg">{text3}</p>
      <p className="text-xs text-gray-custom md:text-lg">{text4}</p>
    </div>
  );
}
