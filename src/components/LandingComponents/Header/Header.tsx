"use client";
import React, { useState } from "react";
import HeroBack from "@/images/Hero-back.png";
import Image from "next/image";
import Link from "next/link";
import DestopMob from "@/images/desktabmob.png";
import BluredBackground from "../BluredBackground";
import HeroSection from "../HeroSection";
import { usePathname } from "next/navigation";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const pathname = usePathname();
  return (
    <>
      <div className="relative h-full w-full pb-10">
        <div className="hidden h-full w-full md:block">
          <Image
            className="absolute inset-0 h-full w-full bg-cover bg-center"
            src={HeroBack}
            alt="Hero"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <nav className="relative z-50 lg:hidden">
          <div className="flex items-center justify-between px-4 py-2">
            <div>
              {/* <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/large_typography_with_gradient_and_glass_effect_Svg1.svg"
                alt="logo"
              /> */}
              <Link href="/" className="text-[#A0FD32]">
                Portfolify
              </Link>
            </div>
            <div className="visible flex items-center">
              <button
                id="open"
                onClick={() => setMenu(!menu)}
                className={` ${menu ? "hidden" : ""} focus:outline-none focus:ring-2 focus:ring-black`}
              >
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/large_typography_with_gradient_and_glass_effect_Svg2.svg"
                  alt="menu"
                />
              </button>
              <ul
                id="list"
                className={` ${menu ? "" : "hidden"} absolute left-0 right-0 top-0 mt-24 rounded border-r bg-white p-2 shadow`}
              >
                <li className="text-gray-600 mt-2 flex cursor-pointer py-2 text-sm leading-3 tracking-normal hover:text-[#A0FD32] focus:text-[#A0FD32] focus:outline-none">
                  <a
                    href="/"
                    className="ml-2 focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <span className="font-bold">Home</span>
                  </a>
                </li>
                <li
                  className="text-gray-600 flex cursor-pointer py-2 text-sm leading-3 tracking-normal hover:text-[#A0FD32] focus:text-[#A0FD32] focus:outline-none"
                  onClick={() => "dropdownHandler(this)"}
                >
                  <a
                    href="/"
                    className="ml-2 focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <span className="font-bold">About Us</span>
                  </a>
                </li>
                <li className="text-gray-600 flex flex cursor-pointer items-center py-2 text-sm leading-3 tracking-normal hover:text-[#A0FD32] focus:text-[#A0FD32] focus:outline-none">
                  <Link
                    href="/templates"
                    className="ml-2 focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <span className="font-bold">Templates</span>
                  </Link>
                </li>
                <li
                  className="text-gray-600 flex cursor-pointer py-2 text-sm leading-3 tracking-normal hover:text-[#A0FD32] focus:text-[#A0FD32] focus:outline-none"
                  onClick={() => "dropdownHandler(this)"}
                >
                  <a
                    href="/"
                    className="ml-2 focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <span className="font-bold">Help</span>
                  </a>
                </li>
                <li
                  className="text-gray-600 flex cursor-pointer pb-4 pt-2 text-sm leading-3 tracking-normal hover:text-[#A0FD32] focus:text-[#A0FD32] focus:outline-none"
                  onClick={() => "dropdownHandler(this)"}
                >
                  <Link
                    href="/auth/signin"
                    className="ml-2 focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <span className="font-bold">Sign In</span>s
                  </Link>
                </li>
              </ul>
              <div className="xl:hidden">
                <button
                  id="close"
                  className={` ${menu ? "" : "hidden"} close-m-menu focus:outline-none focus:ring-2 focus:ring-black`}
                  onClick={() => setMenu(!menu)}
                >
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/large_typography_with_gradient_and_glass_effect_Svg3.svg"
                    alt="close"
                  />
                </button>
              </div>
            </div>
          </div>
        </nav>
        <nav className="f-f-l relative z-10">
          <div className="container relative z-10 mx-auto hidden w-full items-center justify-between px-4 py-11 lg:flex xl:px-0">
            <div>
              {/* <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/large_typography_with_gradient_and_glass_effect_Svg4.svg"
                alt="logo"
              /> */}
              <Link href="/" className="text-2xl font-bold text-[#A0FD32]">
                Portfolify
              </Link>
            </div>
            <div className="flex items-center text-base font-medium text-white">
              <ul className="flex items-center pr-3 xl:pr-12">
                <li className="hover:text-gray-300 cursor-pointer ease-in">
                  <a
                    href="/"
                    className="focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    Home
                  </a>
                </li>
                <li className="hover:text-gray-300 cursor-pointer pl-3 ease-in lg:pl-5 xl:pl-8">
                  <a
                    href="/"
                    className="focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    About Us
                  </a>
                </li>
                <li className="hover:text-gray-300 cursor-pointer pl-3 ease-in lg:pl-5 xl:pl-8">
                  <Link
                    href="/templates"
                    className="focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    Templates
                  </Link>
                </li>
                <li className="hover:text-gray-300 cursor-pointer pl-3 ease-in lg:pl-5 xl:pl-8">
                  <a
                    href="/"
                    className="focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    Help
                  </a>
                </li>
              </ul>
              <Link
                href="/auth/signin"
                className="flex items-center justify-center rounded-lg border border-white bg-[#acf84f62] px-6 py-3 text-base font-medium text-white hover:bg-[#A0FD32] focus:outline-none focus:ring-2 focus:ring-[#A0FD32] focus:ring-offset-2"
              >
                Sign In
                <img
                  className="ml-4"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/large_typography_with_gradient_and_glass_effect_Svg5.svg"
                  alt="arrow"
                />
              </Link>
            </div>
          </div>
        </nav>
        {pathname === "/" && <HeroSection />}
      </div>

      <style>{`
        .top-100 {
            animation: slideDown .5s ease-in-out;
        }

        @keyframes slideDown {
            0% {
                top: -50%;
            }

            100% {
                top: 0;
            }
        }

        * {
            outline: none !important;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            -webkit-tap-highlight-color: transparent;
        } `}</style>
    </>
  );
};

export default Header;
