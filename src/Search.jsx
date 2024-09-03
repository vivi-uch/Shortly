import Button from "./Button";
export default function Search() {
  return (
    <div
      className="mx-52 p-12 flex text-gray-custom text-2xl  bg-Dark-Violet rounded-xl gap-5 relative z-10 top-20"
      style={{ backgroundImage: "url('images/bg-shorten-desktop.svg')" }}
    >
      <input
        type="text"
        placeholder="shorten a link here"
        className="rounded-lg p-4 border flex-grow"
      />
      <div className="flex">
        <Button name="Shorten It!" styling="rounded-lg" />
      </div>
    </div>
  );
}
// absolute top-[62rem] w-max-100
