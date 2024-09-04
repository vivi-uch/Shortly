import Nav from "./Nav";
import Button from "./Button";

export default function Heading() {
  return (
    <>
      <Nav />
      <div className="grid grid-cols-2 mt-28 mb-4">
        <div className="flex flex-col ml-32">
          <h1 className="font-bold text-[4.5rem] leading-none">
            More than just shorter Links
          </h1>
          <p className="text-slate-400 text-[1.4rem] mt-4">
            Build your brand's recognition and get detailed insights on how your
            links are perfoming
          </p>
          <div className="flex items-center mt-16">
            <Button name="Get Started" styling="rounded-[44px]" />
          </div>
        </div>
        <div>
          <img
            src="images/illustration-working.svg"
            alt="illustration"
            className="w-full"
          />
        </div>
      </div>
    </>
  );
}
