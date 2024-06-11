import React from "react";
import Image from "next/image";
import DestopMob from "@/images/desktabmob.png";

const BluredBackground = () => {
  return (
    <div className="relative flex h-96 w-full sm:h-[500px] md:h-[600px] lg:h-[700px]">
      <div className="absolute inset-0 flex justify-end rounded-2xl bg-white shadow-2xl blur-sm">
        <div className="h-full w-[90%] bg-[#A0FD32] sm:w-full md:w-[80%] lg:w-[90%]"></div>
      </div>
      <div className="absolute inset-0 top-25 z-10 h-3/6 md:top-0 md:h-auto">
        <Image
          src={DestopMob}
          alt="Overlay Image"
          layout="fill"
          objectFit="cover"
          className="rounded-2xl md:h-auto"
        />
      </div>
    </div>
  );
};

export default BluredBackground;
