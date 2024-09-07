import { useState } from "react";
import Button from "./Button";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("features");

  return (
    <div className="flex items-center py-2 md:my-6 px-4 md:px-32 text-xs md:text-[18px]">
      <img
        src="images/logo.svg"
        alt="logo"
        className="mr-12 w-24 md:w-32 lg:w-40"
      />

      {/* {laptop view} */}
      <div className="hidden md:flex justify-between flex-grow">
        <div className="text-slate-400 gap-8 flex justify-center items-center text-lg">
          <a
            href="#features"
            className={`${
              active === "features" ? "border-b-2 border-Dark-Violet" : ""
            } hover:text-gray-900`}
            onClick={() => setActive("features")}
          >
            Features
          </a>
          <a
            href="#pricing"
            className={`${
              active === "pricing" ? "border-b-2 border-Dark-Violet" : ""
            } hover:text-gray-900`}
            onClick={() => setActive("pricing")}
          >
            Pricing
          </a>
          <a
            href="#resources"
            className={`${
              active === "resources" ? "border-b-2 border-Dark-Violet" : ""
            } hover:text-gray-900`}
            onClick={() => setActive("resources")}
          >
            Resources
          </a>
        </div>
        <div className="flex items-center">
          <p className="text-slate-400 mr-8 hover:text-gray-900">Login</p>
          <Button name="Sign up" styling="rounded-[44px]" />
        </div>
      </div>

      {/* {mobile view} */}
      <button className="absolute right-4" onClick={() => setIsOpen(!isOpen)}>
        <img
          src="images/icon-menu.svg"
          alt="menu-button"
          className="lg:hidden h-6 w-8"
        />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50">
          <div className="absolute bg-purple-950 p-6 top-20 inset-6 rounded-md">
            {/* <button
              onClick={() => setIsOpen(!isOpen)}
              className="absolute top-2 right-[1.5rem]"
            >
              ❌
            </button> */}

            <nav className="flex flex-col gap-5 justify-center text-center text-lg text-white font-semibold">
              {["Features", "Pricing", "Resources"].map((item) => (
                <a
                  href="#home"
                  className="hover:text-gray-600 "
                  key={item}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {item}
                </a>
              ))}
              <hr className="bg-slate-500 opacity-25 my-0" />
              <a href="#trending" className="hover:text-gray-600 ">
                Login
              </a>
              <Button name="Sign up" styling="rounded-[44px]" />
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
