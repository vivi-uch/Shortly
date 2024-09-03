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
    <div className="flex bg-Very-Dark-Violet px-52 py-20 mb-0 justify-between cursor-pointer">
      <div>
        <h1 className="text-[60px] font-bold text-white p-0">Shortly</h1>
      </div>
      {cardList.map((card) => (
        <FooterCard
          heading={card.heading}
          text1={card.text1}
          text2={card.text2}
          text3={card.text3}
          text4={card.text4}
        />
      ))}
      <div className="flex gap-16">
        {contactimag.map((logo) => (
          <img src={logo.src} alt={logo.name} className="w-8 h-8 font-bold" />
        ))}
      </div>
    </div>
  );
}

function FooterCard({ heading, text1, text2, text3, text4 }) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="mb-4 text-white text-2xl font-bold">{heading}</h3>
      <p className="text-gray-custom text-xl">{text1}</p>
      <p className="text-gray-custom text-xl">{text2}</p>
      <p className="text-gray-custom text-xl">{text3}</p>
      <p className="text-gray-custom text-xl">{text4}</p>
    </div>
  );
}
