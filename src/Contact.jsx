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
    <div className="flex bg-Very-Dark-Violet px-32 py-12 mb-0 justify-between cursor-pointer">
      <div>
        <h1 className="text-[40px] font-bold text-white p-0">Shortly</h1>
      </div>
      <div className="flex gap-20">
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
      <h3 className="mb-4 text-white text-xl font-bold">{heading}</h3>
      <p className="text-gray-custom text-lg">{text1}</p>
      <p className="text-gray-custom text-lg">{text2}</p>
      <p className="text-gray-custom text-lg">{text3}</p>
      <p className="text-gray-custom text-lg">{text4}</p>
    </div>
  );
}
