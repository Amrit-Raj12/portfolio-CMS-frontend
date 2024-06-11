import React from "react";

const Contact = () => {
  return (
    <>
      <div className="relative py-4  lg:py-8">
        <img
          src="https://cdn.tuk.dev/assets/templates/radian/Back_Image.png"
          className="absolute inset-0 hidden h-2/5 w-full object-cover object-center lg:h-full lg:w-1/2 xl:block"
          alt="map"
        />
        <div className="relative xl:container  xl:mx-auto ">
          <div className="flex flex-wrap xl:container xl:mx-auto">
            <div className="relative mb-10 w-full pl-0 lg:w-1/2 xl:mt-10 xl:pl-12 2xl:pl-0 2xl:pr-24 ">
              <img
                src="https://cdn.tuk.dev/assets/templates/radian/Back_Image.png"
                className="absolute inset-0 h-full w-full bg-cover bg-center xl:hidden xl:w-1/2"
                alt="map"
              />
              <div className="relative z-20 flex w-full  flex-col  items-start px-4 py-4 xl:justify-start xl:px-0 xl:py-0">
                <div className="w-full xl:pt-1 2xl:pl-48">
                  <h1 className="text-gray-800 text-4xl font-bold tracking-wider md:text-5xl lg:text-7xl">
                    We’re Here
                  </h1>
                  <div className="mt-3 w-full md:w-10/12">
                    <h2 className="text-gray-800 text-base leading-8 tracking-wider md:text-lg">
                      We believe digital innovation is at the heart of every
                      business success
                    </h2>
                    <div className="mt-4 md:mt-8">
                      <h2 className="text-sm font-semibold text-indigo-700 md:text-base">
                        Address
                      </h2>
                      <h2 className="text-gray-800 mt-2 text-base leading-8 tracking-wider md:text-lg">
                        Office #13, NSTP, NUST University H-12 Sector, Islamabad
                      </h2>
                    </div>
                    <div className="mt-4 md:mt-8">
                      <h2 className="text-sm font-semibold text-indigo-700 md:text-base">
                        Contact
                      </h2>
                      <h2 className="text-gray-800 mt-2 text-base leading-8 tracking-wider md:text-lg">
                        +92 051 4567890 (Phone)
                      </h2>
                      <h2 className="text-gray-800 mt-2 text-base leading-8 tracking-wider md:text-lg">
                        +92 123 4567890 (Cell)
                      </h2>
                    </div>
                    <div className="mt-4 md:mt-8">
                      <h2 className="text-sm font-semibold text-indigo-700 md:text-base">
                        Email
                      </h2>
                      <h2 className="text-gray-800 mt-2 text-base leading-8 tracking-wider md:text-lg">
                        alphasquad@example.com
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2   lg:pl-24 xl:pt-10">
              <div className="flex flex-col items-start px-4 xl:justify-start xl:px-0 2xl:justify-end">
                <h1 className="text-4xl font-bold tracking-wider text-indigo-700 md:text-5xl lg:text-7xl">
                  Let’s Talk
                </h1>
                <div className="mt-3 w-full 2xl:w-8/12">
                  <h2 className="text-gray-800 text-base leading-8 tracking-wider md:text-lg">
                    For enquiries, please email us using the form below
                  </h2>
                  <div className="mt-4 md:mt-8">
                    <p className="text-gray-800 text-base font-medium">Name</p>
                    <input
                      className="text-gray-800 mt-3 w-11/12 border-2 border-black py-5 pl-4 text-base hover:border-indigo-600 focus:border-indigo-600 focus:outline-none lg:w-full xl:w-10/12"
                      type="text"
                      placeholder="Justin Timberlake"
                    />
                  </div>
                  <div className="mt-4 md:mt-8">
                    <p className="text-gray-800 text-base font-medium">
                      Email Address
                    </p>
                    <input
                      className="text-gray-800 mt-3 w-11/12 border-2 border-black py-5 pl-4 text-base hover:border-indigo-600 focus:border-indigo-600 focus:outline-none lg:w-full xl:w-10/12"
                      type="email"
                      placeholder="example@mail.com"
                    />
                  </div>
                  <div className="mt-4 md:mt-8">
                    <p className="text-gray-800 text-base font-medium">
                      Message
                    </p>
                    <textarea
                      className="text-gray-800 mt-3 w-11/12 resize-none border-2 border-black py-5 pl-4 text-base hover:border-indigo-600 focus:border-indigo-600 focus:outline-none lg:w-full xl:h-40 xl:w-10/12"
                      placeholder="Write us something..."
                      defaultValue={""}
                    />
                  </div>
                  <div className="py-5">
                    <button className="bg-gray-900 px-5 py-3 text-sm font-semibold tracking-wider text-white duration-150 ease-in hover:opacity-90 md:px-10 md:py-5 md:text-lg">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
