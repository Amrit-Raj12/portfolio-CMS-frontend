import React from "react";
import BluredBackground from "../BluredBackground";

const HeroSection = () => {
  return (
    <div>
      <div className="container relative mx-auto items-center gap-8 px-4 md:flex xl:px-0">
        <div className="text-color w-full pt-16 md:w-1/3 lg:pt-32 xl:pt-12">
          <h1 className="f-f-l w-11/12 text-4xl font-extrabold text-[#A0FD32] md:text-4xl lg:w-11/12 lg:text-6xl xl:w-full xl:text-6xl">
            Build Your Dream Portfolio Today
          </h1>
          <div className="f-f-r pb-20 pt-10 text-base sm:pb-0 lg:text-base xl:pt-6">
            <h2>
              Create a stunning, personalized portfolio with ease using our
              intuitive CMS. Whether you're a designer, developer, or artist,
              our platform offers sleek templates and powerful customization
              tools to showcase your work and attract potential clients
              effortlessly. Start building your professional presence and make a
              lasting impression with just a few clicks.
            </h2>
          </div>
          <div className="lg:flex">
            <button className="f-f-r mt-4 hidden w-full rounded-lg bg-[#A0FD32] py-4 text-base font-bold text-white hover:opacity-90  focus:outline-none focus:ring-2 focus:ring-[#A0FD32] focus:ring-offset-2 md:block xl:mt-8 xl:w-6/12 xl:text-base">
              Start building now
            </button>
            <button className="f-f-r mt-4 hidden w-full rounded-lg border border-[#A0FD32] bg-transparent py-4 text-base font-medium text-[#ADF032] hover:opacity-90  focus:outline-none focus:ring-2 focus:ring-[#A0FD32] focus:ring-offset-2 md:block lg:ml-2 xl:ml-2 xl:mt-8 xl:w-4/12 xl:text-base">
              Try it out
            </button>
          </div>
        </div>
        {/* <img
            className="mt-8 w-full object-fill md:-ml-4 md:mt-0 md:w-2/3 lg:-ml-4 xl:ml-0"
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Graphic.png"
            alt="sample page"
            role="img"
          /> */}
        {/* <Image
            src={DestopMob}
            alt="Porfolofy"
            className="mt-8 w-full object-fill md:-ml-4 md:mt-0 md:w-2/3 lg:-ml-4 xl:ml-0"
          /> */}
        <BluredBackground />
        <button className="f-f-r mt-4 w-full rounded-lg border border-[#A0FD32] bg-[#A0FD32] py-4 text-base font-bold  text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#A0FD32] focus:ring-offset-2 md:hidden xl:mt-8 xl:w-6/12 xl:text-base">
          Start building now
        </button>
        <button className="f-f-r mt-4 w-full rounded-lg bg-indigo-200 py-4 text-base font-medium text-indigo-600 hover:opacity-90 focus:outline-none  focus:ring-2 focus:ring-[#A0FD32] focus:ring-offset-2 md:hidden xl:ml-2 xl:mt-8 xl:w-4/12 xl:text-base">
          Try it out
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
