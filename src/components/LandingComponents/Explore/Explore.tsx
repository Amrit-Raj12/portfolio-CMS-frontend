import React from "react";

const Explore = () => {
  return (
    <>
      <div>
        <div className=" py-9 2xl:container  md:py-12 2xl:mx-auto">
          <div className="relative rounded-md">
            <img
              src="https://i.ibb.co/SBpL1cK/pexels-aleksandar-pasaric-325185-1.png"
              alt="city view"
              className="absolute hidden h-full  w-full rounded-md object-fill object-center sm:block"
            />
            <img
              src="https://i.ibb.co/LQpxBsc/mobile.png"
              alt="city view"
              className="absolute h-full w-full rounded-md object-fill object-center sm:hidden"
            />
            <div className="relative top-0 z-20 z-40 flex h-full w-full flex-col justify-between rounded-md bg-gradient-to-r from-[#A0FD32] to-transparent p-6 text-xl md:p-16 ">
              <div>
                <h1 className="w-64 text-3xl font-bold leading-9 text-white sm:w-auto md:text-5xl md:leading-10">
                  Act Before It’s Too Late!
                </h1>
                <p className="mt-4 text-lg leading-6 text-white md:w-10/12 lg:w-8/12  xl:w-5/12 2xl:pr-12">
                  A good idiom for kids is "It's raining cats and dogs." Kids
                  know what both cats and dogs are from an early age.
                </p>
              </div>
              <div className="flex flex-row gap-4">
                <div className="mt-20 md:mt-12">
                  <button className="w-full rounded-3xl bg-white p-4 text-base font-medium leading-4 text-[#A0FD32] hover:bg-[#A0FD32] hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 sm:w-auto">
                    Explore All
                  </button>
                </div>

                <div className="mt-20 md:mt-12">
                  <button className="w-full rounded-3xl border border-white bg-[#A0FD32] p-4 text-base font-medium leading-4 text-white hover:bg-white hover:text-[#A0FD32] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 sm:w-auto">
                    Sign Up Free
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
