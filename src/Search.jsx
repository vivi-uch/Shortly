import Button from "./Button";
export default function Search() {
  return (
    <div
      className="mx-32 p-6 flex text-gray-custom text-lg  bg-Dark-Violet rounded-xl gap-5 relative z-10 top-12"
      style={{ backgroundImage: "url('images/bg-shorten-desktop.svg')" }}
    >
      <input
        type="text"
        placeholder="shorten a link here"
        className="rounded-lg p-2 border flex-grow"
      />
      <div className="flex">
        <Button name="Shorten It!" styling="rounded-lg" />
      </div>
    </div>
  );
}
// absolute top-[62rem] w-max-100
