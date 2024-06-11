import React from "react";
// import Template1 from "@/images/Black Orange Modern Minimalist Creative Online Portfolio Cover.png";
import Image from "next/image";

// const backgroundImage = `url(${Template1})`;

const TemplateSection = () => {
  return (
    <section className="bg-gray-900 px-4">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold text-[#A0FD32] sm:text-4xl">
            Explore Our Stunning Templates
          </h2>

          <p className="text-gray-300 mt-4">
            Discover beautifully crafted templates designed to highlight your
            unique style. From modern minimalist to artistic flair, find the
            perfect starting point for your professional portfolio. Fully
            customizable and easy to use, create a standout portfolio today!
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="group relative flex h-64 cursor-pointer items-center justify-center overflow-hidden rounded-xl border border-[#A0FD32] bg-[url('/images/templates/portfolio-template-1.jpg')] bg-cover bg-center p-8 shadow-xl transition hover:border-[#A0FD32] hover:shadow-[#A0FD32]">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer fill-white opacity-0 transition-opacity duration-300 group-hover:fill-[#A0FD32] group-hover:opacity-100"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <title>eye</title>
                  <path d="M0 16q0.064 0.128 0.16 0.352t0.48 0.928 0.832 1.344 1.248 1.536 1.664 1.696 2.144 1.568 2.624 1.344 3.136 0.896 3.712 0.352 3.712-0.352 3.168-0.928 2.592-1.312 2.144-1.6 1.664-1.632 1.248-1.6 0.832-1.312 0.48-0.928l0.16-0.352q-0.032-0.128-0.16-0.352t-0.48-0.896-0.832-1.344-1.248-1.568-1.664-1.664-2.144-1.568-2.624-1.344-3.136-0.896-3.712-0.352-3.712 0.352-3.168 0.896-2.592 1.344-2.144 1.568-1.664 1.664-1.248 1.568-0.832 1.344-0.48 0.928zM10.016 16q0-2.464 1.728-4.224t4.256-1.76 4.256 1.76 1.76 4.224-1.76 4.256-4.256 1.76-4.256-1.76-1.728-4.256zM12 16q0 1.664 1.184 2.848t2.816 1.152 2.816-1.152 1.184-2.848-1.184-2.816-2.816-1.184-2.816 1.184l2.816 2.816h-4z"></path>
                </g>
              </svg>
            </div>
            <div className="absolute bottom-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-white group-hover:text-[#A0FD32]">
                Template1
              </span>
            </div>
          </div>

          <div className="group relative flex h-64 cursor-pointer items-center justify-center overflow-hidden rounded-xl border border-[#A0FD32] bg-[url('/images/templates/portfolio-template-1.jpg')] bg-cover bg-center p-8 shadow-xl transition hover:border-[#A0FD32] hover:shadow-[#A0FD32]">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer fill-white opacity-0 transition-opacity duration-300 group-hover:fill-[#A0FD32] group-hover:opacity-100"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <title>eye</title>
                  <path d="M0 16q0.064 0.128 0.16 0.352t0.48 0.928 0.832 1.344 1.248 1.536 1.664 1.696 2.144 1.568 2.624 1.344 3.136 0.896 3.712 0.352 3.712-0.352 3.168-0.928 2.592-1.312 2.144-1.6 1.664-1.632 1.248-1.6 0.832-1.312 0.48-0.928l0.16-0.352q-0.032-0.128-0.16-0.352t-0.48-0.896-0.832-1.344-1.248-1.568-1.664-1.664-2.144-1.568-2.624-1.344-3.136-0.896-3.712-0.352-3.712 0.352-3.168 0.896-2.592 1.344-2.144 1.568-1.664 1.664-1.248 1.568-0.832 1.344-0.48 0.928zM10.016 16q0-2.464 1.728-4.224t4.256-1.76 4.256 1.76 1.76 4.224-1.76 4.256-4.256 1.76-4.256-1.76-1.728-4.256zM12 16q0 1.664 1.184 2.848t2.816 1.152 2.816-1.152 1.184-2.848-1.184-2.816-2.816-1.184-2.816 1.184l2.816 2.816h-4z"></path>
                </g>
              </svg>
            </div>
            <div className="absolute bottom-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-white group-hover:text-[#A0FD32]">
                Template2
              </span>
            </div>
          </div>

          <div className="group relative flex h-64 cursor-pointer items-center justify-center overflow-hidden rounded-xl border border-[#A0FD32] bg-[url('/images/templates/portfolio-template-1.jpg')] bg-cover bg-center p-8 shadow-xl transition hover:border-[#A0FD32] hover:shadow-[#A0FD32]">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer fill-white opacity-0 transition-opacity duration-300 group-hover:fill-[#A0FD32] group-hover:opacity-100"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <title>eye</title>
                  <path d="M0 16q0.064 0.128 0.16 0.352t0.48 0.928 0.832 1.344 1.248 1.536 1.664 1.696 2.144 1.568 2.624 1.344 3.136 0.896 3.712 0.352 3.712-0.352 3.168-0.928 2.592-1.312 2.144-1.6 1.664-1.632 1.248-1.6 0.832-1.312 0.48-0.928l0.16-0.352q-0.032-0.128-0.16-0.352t-0.48-0.896-0.832-1.344-1.248-1.568-1.664-1.664-2.144-1.568-2.624-1.344-3.136-0.896-3.712-0.352-3.712 0.352-3.168 0.896-2.592 1.344-2.144 1.568-1.664 1.664-1.248 1.568-0.832 1.344-0.48 0.928zM10.016 16q0-2.464 1.728-4.224t4.256-1.76 4.256 1.76 1.76 4.224-1.76 4.256-4.256 1.76-4.256-1.76-1.728-4.256zM12 16q0 1.664 1.184 2.848t2.816 1.152 2.816-1.152 1.184-2.848-1.184-2.816-2.816-1.184-2.816 1.184l2.816 2.816h-4z"></path>
                </g>
              </svg>
            </div>
            <div className="absolute bottom-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-white group-hover:text-[#A0FD32]">
                Template3
              </span>
            </div>
          </div>

          <div className="group relative flex h-64 cursor-pointer items-center justify-center overflow-hidden rounded-xl border border-[#A0FD32] bg-[url('/images/templates/portfolio-template-1.jpg')] bg-cover bg-center p-8 shadow-xl transition hover:border-[#A0FD32] hover:shadow-[#A0FD32]">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer fill-white opacity-0 transition-opacity duration-300 group-hover:fill-[#A0FD32] group-hover:opacity-100"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <title>eye</title>
                  <path d="M0 16q0.064 0.128 0.16 0.352t0.48 0.928 0.832 1.344 1.248 1.536 1.664 1.696 2.144 1.568 2.624 1.344 3.136 0.896 3.712 0.352 3.712-0.352 3.168-0.928 2.592-1.312 2.144-1.6 1.664-1.632 1.248-1.6 0.832-1.312 0.48-0.928l0.16-0.352q-0.032-0.128-0.16-0.352t-0.48-0.896-0.832-1.344-1.248-1.568-1.664-1.664-2.144-1.568-2.624-1.344-3.136-0.896-3.712-0.352-3.712 0.352-3.168 0.896-2.592 1.344-2.144 1.568-1.664 1.664-1.248 1.568-0.832 1.344-0.48 0.928zM10.016 16q0-2.464 1.728-4.224t4.256-1.76 4.256 1.76 1.76 4.224-1.76 4.256-4.256 1.76-4.256-1.76-1.728-4.256zM12 16q0 1.664 1.184 2.848t2.816 1.152 2.816-1.152 1.184-2.848-1.184-2.816-2.816-1.184-2.816 1.184l2.816 2.816h-4z"></path>
                </g>
              </svg>
            </div>
            <div className="absolute bottom-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-white group-hover:text-[#A0FD32]">
                Template4
              </span>
            </div>
          </div>

          <div className="group relative flex h-64 cursor-pointer items-center justify-center overflow-hidden rounded-xl border border-[#A0FD32] bg-[url('/images/templates/portfolio-template-1.jpg')] bg-cover bg-center p-8 shadow-xl transition hover:border-[#A0FD32] hover:shadow-[#A0FD32]">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer fill-white opacity-0 transition-opacity duration-300 group-hover:fill-[#A0FD32] group-hover:opacity-100"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <title>eye</title>
                  <path d="M0 16q0.064 0.128 0.16 0.352t0.48 0.928 0.832 1.344 1.248 1.536 1.664 1.696 2.144 1.568 2.624 1.344 3.136 0.896 3.712 0.352 3.712-0.352 3.168-0.928 2.592-1.312 2.144-1.6 1.664-1.632 1.248-1.6 0.832-1.312 0.48-0.928l0.16-0.352q-0.032-0.128-0.16-0.352t-0.48-0.896-0.832-1.344-1.248-1.568-1.664-1.664-2.144-1.568-2.624-1.344-3.136-0.896-3.712-0.352-3.712 0.352-3.168 0.896-2.592 1.344-2.144 1.568-1.664 1.664-1.248 1.568-0.832 1.344-0.48 0.928zM10.016 16q0-2.464 1.728-4.224t4.256-1.76 4.256 1.76 1.76 4.224-1.76 4.256-4.256 1.76-4.256-1.76-1.728-4.256zM12 16q0 1.664 1.184 2.848t2.816 1.152 2.816-1.152 1.184-2.848-1.184-2.816-2.816-1.184-2.816 1.184l2.816 2.816h-4z"></path>
                </g>
              </svg>
            </div>
            <div className="absolute bottom-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-white group-hover:text-[#A0FD32]">
                Template5
              </span>
            </div>
          </div>

          <div className="group relative flex h-64 cursor-pointer items-center justify-center overflow-hidden rounded-xl border border-[#A0FD32] bg-[url('/images/templates/portfolio-template-1.jpg')] bg-cover bg-center p-8 shadow-xl transition hover:border-[#A0FD32] hover:shadow-[#A0FD32]">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer fill-white opacity-0 transition-opacity duration-300 group-hover:fill-[#A0FD32] group-hover:opacity-100"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <title>eye</title>
                  <path d="M0 16q0.064 0.128 0.16 0.352t0.48 0.928 0.832 1.344 1.248 1.536 1.664 1.696 2.144 1.568 2.624 1.344 3.136 0.896 3.712 0.352 3.712-0.352 3.168-0.928 2.592-1.312 2.144-1.6 1.664-1.632 1.248-1.6 0.832-1.312 0.48-0.928l0.16-0.352q-0.032-0.128-0.16-0.352t-0.48-0.896-0.832-1.344-1.248-1.568-1.664-1.664-2.144-1.568-2.624-1.344-3.136-0.896-3.712-0.352-3.712 0.352-3.168 0.896-2.592 1.344-2.144 1.568-1.664 1.664-1.248 1.568-0.832 1.344-0.48 0.928zM10.016 16q0-2.464 1.728-4.224t4.256-1.76 4.256 1.76 1.76 4.224-1.76 4.256-4.256 1.76-4.256-1.76-1.728-4.256zM12 16q0 1.664 1.184 2.848t2.816 1.152 2.816-1.152 1.184-2.848-1.184-2.816-2.816-1.184-2.816 1.184l2.816 2.816h-4z"></path>
                </g>
              </svg>
            </div>
            <div className="absolute bottom-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-white group-hover:text-[#A0FD32]">
                Template6
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block rounded bg-[#A0FD32] px-12 py-3 text-sm font-medium text-white transition hover:bg-[#79ca16] focus:outline-none"
          >
            See More
          </a>
        </div>
      </div>
    </section>
  );
};

export default TemplateSection;
