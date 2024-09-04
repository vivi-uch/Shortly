import Button from "./Button";

export default function Search() {
  return (
    <div
      className="mx-4 md:mx-32 p-6 gap-3 flex flex-col md:flex-row text-gray-custom text-sm md:text-lg bg-Dark-Violet rounded-xl md:gap-5 relative z-10 top-12"
      style={{ backgroundImage: "url('images/bg-shorten-desktop.svg')" }}
    >
      <input
        type="text"
        placeholder="shorten a link here"
        className="rounded-lg p-2 border flex-grow mb-2 md:mb-0"
      />
      <div className="flex">
        <Button name="Shorten It!" styling="rounded-lg w-full md:w-auto" />
      </div>
    </div>
  );
}
