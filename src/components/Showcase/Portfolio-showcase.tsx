"use client";
import React from "react";

const PortfolioShowcase: React.FC = () => {
  return (
    <>
      <div className="grid gap-2  md:grid-cols-2">
        <div className="min-h-[150px] rounded-xl bg-white dark:bg-[#24303F] md:col-span-2">
          <div className="m-6 flex justify-between">
            <div className="">
              <div className="mb-15 text-2xl font-bold text-neutral-700 dark:text-white">
                Portfolio Showcase
              </div>
              <div className="flex gap-2">
                <button className="rounded-3xl bg-[#A0FD32] px-5 text-white shadow-md">
                  View
                </button>
                <button className="rounded-3xl bg-gray px-5 text-black shadow-md hover:bg-[#A0FD32] hover:text-white">
                  Edit
                </button>
                <button className="rounded-3xl bg-gray px-5 text-black shadow-md hover:bg-[#A0FD32] hover:text-white">
                  Share
                </button>
              </div>
            </div>
            <div className="flex ">
              <div className="flex items-center justify-center">
                <img
                  className="h-[80px] w-[50px]"
                  src="/images/portfolio.png"
                  alt="My Image"
                />
              </div>
              <div className="cursor-pointer">
                <svg
                  fill="#000000"
                  width="34px"
                  height="34px"
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>eye</title>{" "}
                    <path d="M0 16q0.064 0.128 0.16 0.352t0.48 0.928 0.832 1.344 1.248 1.536 1.664 1.696 2.144 1.568 2.624 1.344 3.136 0.896 3.712 0.352 3.712-0.352 3.168-0.928 2.592-1.312 2.144-1.6 1.664-1.632 1.248-1.6 0.832-1.312 0.48-0.928l0.16-0.352q-0.032-0.128-0.16-0.352t-0.48-0.896-0.832-1.344-1.248-1.568-1.664-1.664-2.144-1.568-2.624-1.344-3.136-0.896-3.712-0.352-3.712 0.352-3.168 0.896-2.592 1.344-2.144 1.568-1.664 1.664-1.248 1.568-0.832 1.344-0.48 0.928zM10.016 16q0-2.464 1.728-4.224t4.256-1.76 4.256 1.76 1.76 4.224-1.76 4.256-4.256 1.76-4.256-1.76-1.728-4.256zM12 16q0 1.664 1.184 2.848t2.816 1.152 2.816-1.152 1.184-2.848-1.184-2.816-2.816-1.184-2.816 1.184l2.816 2.816h-4z"></path>{" "}
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-gray-300 flex min-h-[200px] rounded-xl md:min-h-[500px]">
          <div className="m-6 flex flex-col content-between justify-between">
            <h2 className="font-bold md:text-2xl">Project Details</h2>
            <div className="flex gap-6">
              <h2 className="font-bold md:text-2xl">Project overview</h2>
              <button className="rounded-3xl bg-white px-5 text-[12px] text-black shadow-md hover:bg-[#A0FD32] hover:text-white md:text-[15px]">
                View
              </button>
            </div>
            <div>
              <div className="mb-2 font-bold md:text-2xl">About Project</div>
              <div>
                Highlight your project details and achievements to impress
                potential clients and employers. Showcase your skills and
                creativity in visually appealing way!
              </div>
            </div>
            <div>
              <div className="font-bold md:text-2xl">Related Projects</div>
              <div className="mt-5 flex gap-2 md:mt-4">
                <button className="rounded-3xl bg-white px-5 py-2 text-[12px] text-black shadow-md hover:bg-[#A0FD32] hover:text-white md:text-[15px]">
                  Download
                </button>
                <button className="rounded-3xl bg-white px-5 py-2 text-[12px] leading-3 text-black shadow-md hover:bg-[#A0FD32] hover:text-white md:text-[15px]">
                  Download Report
                </button>
                <button className="rounded-3xl bg-white px-5 py-2 text-[12px] leading-3 text-black shadow-md hover:bg-[#A0FD32] hover:text-white md:text-[15px]">
                  View Presentation
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="min-h-[200px] rounded-xl bg-white dark:bg-[#24303F] md:min-h-[500px]">
          <div className="m-6">
            <div className="mb-4 font-bold dark:text-white md:text-2xl">
              Collaborators
            </div>
            <div className=" flex gap-4">
              <input
                className="w-60 rounded-3xl p-2 shadow-2 focus:outline-none md:w-94"
                type="email"
                name=""
                id=""
                placeholder="Add Collaborator"
              />
              <button className="rounded-3xl bg-white px-5 py-2 text-[12px] leading-3 text-black shadow-md hover:bg-[#A0FD32] hover:text-white md:text-[15px]">
                Send Invitation
              </button>
            </div>
            <div className="mt-2">
              <div className="flex items-center gap-8">
                <div className="relative mb-3 flex h-12 w-12 items-center justify-center rounded-full shadow-2 dark:bg-[#A0FD32] dark:text-black">
                  <span>He</span>
                  <div className="absolute -bottom-3 -right-3 bg-transparent">
                    <svg
                      className="fill-transparent "
                      width="34px"
                      height="34px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M12 17V16.9929M12 14.8571C12 11.6429 15 12.3571 15 9.85714C15 8.27919 13.6568 7 12 7C10.6567 7 9.51961 7.84083 9.13733 9"
                          stroke="#000000"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                  </div>
                </div>

                <div>You(Maybe)</div>
              </div>
            </div>
            <div className="mt-2">
              <div className="flex items-center gap-8">
                <div className="relative mb-3 flex h-12 w-12 items-center justify-center rounded-full shadow-2 dark:bg-[#A0FD32] dark:text-black">
                  <span>He</span>
                  <div className="absolute -bottom-3 -right-3 bg-transparent">
                    <svg
                      className="fill-transparent "
                      width="34px"
                      height="34px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M12 17V16.9929M12 14.8571C12 11.6429 15 12.3571 15 9.85714C15 8.27919 13.6568 7 12 7C10.6567 7 9.51961 7.84083 9.13733 9"
                          stroke="#000000"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                  </div>
                </div>

                <div>You(Maybe)</div>
              </div>
            </div>
            <div className="mt-2">
              <div className="flex items-center gap-8">
                <div className="relative mb-3 flex h-12 w-12 items-center justify-center rounded-full shadow-2 dark:bg-[#A0FD32] dark:text-black">
                  <span>He</span>
                  <div className="absolute -bottom-3 -right-3 bg-transparent">
                    <svg
                      className="fill-transparent "
                      width="34px"
                      height="34px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M12 17V16.9929M12 14.8571C12 11.6429 15 12.3571 15 9.85714C15 8.27919 13.6568 7 12 7C10.6567 7 9.51961 7.84083 9.13733 9"
                          stroke="#000000"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                  </div>
                </div>

                <div>You(Maybe)</div>
              </div>
            </div>
            <div className="mt-2">
              <div className="flex items-center gap-8">
                <div className="relative mb-3 flex h-12 w-12 items-center justify-center rounded-full shadow-2 dark:bg-[#A0FD32] dark:text-black">
                  <span>He</span>
                  <div className="absolute -bottom-3 -right-3 bg-transparent">
                    <svg
                      className="fill-transparent "
                      width="34px"
                      height="34px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M12 17V16.9929M12 14.8571C12 11.6429 15 12.3571 15 9.85714C15 8.27919 13.6568 7 12 7C10.6567 7 9.51961 7.84083 9.13733 9"
                          stroke="#000000"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                  </div>
                </div>

                <div>You(Maybe)</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <svg className="stroke-black hover:stroke-green-500 dark:stroke-white dark:hover:stroke-green-500" strokeWidth="2" strokeWidth="2"></path> </g></svg> */}
    </>
  );
};

export default PortfolioShowcase;
