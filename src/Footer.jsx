import Button from "./Button";

export default function Footer() {
  return (
    <div
      className="bg-Dark-Violet p-4 flex flex-col justify-center items-center text-white bg-cover bg-center md:p-8"
      style={{ backgroundImage: "url('images/bg-boost-desktop.svg')" }}
    >
      <h1 className="text-[30px] text-center md:text-4xl font-bold mb-8">
        Boost your links today
      </h1>
      <Button name="Get Started" styling="rounded-[44px] py-4" />
    </div>
  );
}
