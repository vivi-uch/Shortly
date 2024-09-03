import Button from "./Button";

export default function Nav() {
  return (
    <div className="flex justify-between items-center py-2  md:my-6 px-4 md:px-52 text-xs md:text-[24px]">
      <div className="flex items-center gap-5">
        <h1 className="text-[2rem] md:text-4xl font-bold">Shortly</h1>
        <div className="hidden text-slate-400 md:flex gap-5 ml-4">
          <p>Features</p>
          <p>Pricing</p>
          <p>Resources</p>
        </div>
      </div>
      <div className="hidden md:flex items-center">
        <p className="text-slate-400 mr-8">Login</p>
        <Button name="Sign up" styling="rounded-[44px]" />
      </div>
    </div>
  );
}
