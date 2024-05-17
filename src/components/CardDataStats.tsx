import Link from "next/link";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardDataStatsProps {
  title: string;
  linkUrl: string;
  date: string;
  // levelUp?: boolean;
  // levelDown?: boolean;
  // children: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  linkUrl,
  date,
}) => {
  return (
    <motion.div
      className="cursor-pointer rounded-2xl border-[2px] border-t-12 border-[#A0FD32] border-t-[#A0FD32] bg-white px-7.5 py-6 shadow-default dark:border-[#A0FD32] dark:border-t-[#A0FD32]  dark:bg-boxdark"
      whileHover={{ scale: 1.1, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)" }}
      transition={{ duration: 0.3 }}
    >
      {/* <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        {children}
      </div> */}

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-[#A0FD32]">
            {title}
          </h4>
          <span className="text-sm font-medium">Created At: {date}</span>
        </div>

        <Link href={linkUrl} className="hover:text-[#A0FD32]">
          View Portfolio
        </Link>

        {/* <span
          className={`flex items-center gap-1 text-sm font-medium ${
            levelUp && "text-meta-3"
          } ${levelDown && "text-meta-5"} `}
        >
          {rate}

          {levelUp && (
            <svg
              className="fill-meta-3"
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z"
                fill=""
              />
            </svg>
          )}
          {levelDown && (
            <svg
              className="fill-meta-5"
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.64284 7.69237L9.09102 4.33987L10 5.22362L5 10.0849L-8.98488e-07 5.22362L0.908973 4.33987L4.35716 7.69237L4.35716 0.0848701L5.64284 0.0848704L5.64284 7.69237Z"
                fill=""
              />
            </svg>
          )}
        </span> */}
      </div>
    </motion.div>
  );
};

export default CardDataStats;
