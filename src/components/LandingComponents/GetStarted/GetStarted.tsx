import React from "react";

const GetStarted = () => {
  return (
    <>
      <div
        className="bg-gray-50 px-4 py-20 2xl:container lg:px-12 2xl:mx-auto 2xl:px-0"
        // style={{ height: 1000 }}
      >
        <div className="bg-gray-50 w-full items-center justify-between md:flex">
          <div className="w-full md:w-1/2 xl:w-1/3">
            <h1
              role="heading"
              className="text-4xl font-bold leading-tight text-[#A0FD32] focus:outline-none md:w-60 md:text-6xl"
            >
              Get<span className="font-normal italic"> Started </span>
            </h1>
            <p
              role="contentinfo"
              className="text-gray-600 mt-8 pr-12 text-base leading-6 focus:outline-none xl:pr-0 2xl:pr-24"
            >
              Don’t get carried away with super-short paragraphs. The secret to
              one-sentence paragraphs is to use them like a spice: A pinch of
              cumin can make a meal more savor.
            </p>
            <div className="group mt-10">
              <button className="text-gray-800 focus:ring-gray-700 flex items-center p-1 text-xl font-medium leading-5 focus:outline-none focus:ring-2 focus:ring-offset-2 group-hover:text-[#A0FD32] md:p-3">
                Begin
                <svg
                  className="ml-8 stroke-slate-700 group-hover:fill-[#A0FD32] group-hover:stroke-[#A0FD32]"
                  width={45}
                  height={40}
                  viewBox="0 0 45 40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.2113 33.7887C11.0161 33.9839 11.0157 34.3009 11.2157 34.4911C13.956 37.0978 17.3821 38.8765 21.0982 39.6157C24.9778 40.3874 28.9991 39.9913 32.6537 38.4776C36.3082 36.9638 39.4318 34.4004 41.6294 31.1114C43.827 27.8224 45 23.9556 45 20C45 16.0444 43.827 12.1776 41.6294 8.8886C39.4318 5.59961 36.3082 3.03616 32.6537 1.52241C28.9991 0.00865715 24.9778 -0.38741 21.0982 0.384294C17.3821 1.12346 13.956 2.90221 11.2157 5.50886C11.0157 5.69911 11.0161 6.01609 11.2113 6.21127C11.4065 6.40645 11.7225 6.4059 11.9227 6.21592C14.523 3.74892 17.7711 2.06527 21.2932 1.36468C24.9789 0.631541 28.7993 1.00781 32.2711 2.44591C35.743 3.88401 38.7105 6.31934 40.7983 9.44394C42.8861 12.5685 44.0004 16.2421 44.0004 20C44.0004 23.7579 42.8861 27.4315 40.7983 30.5561C38.7105 33.6807 35.743 36.116 32.2711 37.5541C28.7993 38.9922 24.9789 39.3685 21.2932 38.6353C17.7711 37.9347 14.523 36.2511 11.9227 33.7841C11.7225 33.5941 11.4065 33.5935 11.2113 33.7887Z" />
                  <path
                    d="M1 20H29"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 28L29 20"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 12L29 20"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-4/6 xl:pl-48">
            <div className="w-full">
              <img
                src="https://i.ibb.co/wMd2Q4B/new.png"
                alt="Purple flowers on a book"
                className="w-full sm:w-1/2 md:w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
