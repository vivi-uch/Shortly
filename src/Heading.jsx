import Nav from "./Nav";
import Button from "./Button";

export default function Heading() {
  return (
    <>
      <Nav />
      <div className="flex flex-col-reverse mt-4 md:grid md:grid-cols-2 md:mt-28 mb-4 items-center">
        <div className="flex flex-col ml-4 md:ml-32 text-center md:text-left">
          <h1 className="font-extrabold md:font-bold text-[2rem] md:text-[4.5rem] leading-none">
            More than just shorter Links
          </h1>
          <p className="text-slate-400 text-[1rem] md:text-[1.4rem] mt-4">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <div className="flex justify-center md:justify-start mt-8">
            <Button
              name="Get Started"
              styling="rounded-[44px] py-2 md:py-4 text-sm md:text-base"
            />
          </div>
        </div>

        <div className="mb-8 mt-8 md:mt-0 md:mb-0">
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
