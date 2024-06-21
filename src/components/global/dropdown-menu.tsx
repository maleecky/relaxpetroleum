"use client";

import React, { ReactNode } from "react";
import clsx from "clsx";
import { motion, useAnimation, Variants } from "framer-motion";

type Props = {
  btn: string;
  children: ReactNode;
};

const DropdownMenu = ({ btn, children }: Props) => {
  const animationControl = useAnimation();

  const heightVariant: Variants = {
    hidden: {
      height: 0,
      width: 0,
      padding: 0,
      margin: 0,
      border: 0,
    },
    visible: {
      height: "max-content",
      width: "30em",
      padding: "1.25rem",
      marginTop: "1.25rem",
      border: "1px solid #fdfdff",

      transition: {
        ease: "backIn",
        duration: 0.4,
      },
    },
  };
  const handleClick = () => {
    animationControl.start("visible");
  };
  const handleBtnRelease = () => {
    animationControl.start("hidden");
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleClick}
      onMouseLeave={handleBtnRelease}
    >
      <button className="!text-[1.0625em] relative -top-[2.9px] flex items-center font-normal">
        {btn}
        <span className="ml-2">
          <svg
            width="8"
            height="6"
            viewBox="0 0 8 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.59976 0.00528193L0.399555 0.00528193C0.326656 0.00551033 0.2552 0.0256162 0.192878 0.0634351C0.130557 0.101254 0.0797286 0.155352 0.0458665 0.219909C0.0120039 0.284466 -0.00361156 0.357036 0.000701904 0.429807C0.00501537 0.502578 0.0290937 0.572795 0.0703454 0.6329L3.67045 5.83305C3.81965 6.04865 4.17886 6.04865 4.32847 5.83305L7.92857 0.6329C7.97024 0.572921 7.99468 0.502668 7.99922 0.429776C8.00377 0.356884 7.98826 0.284139 7.95436 0.219445C7.92047 0.154752 7.8695 0.100583 7.80698 0.0628262C7.74446 0.0250688 7.67279 0.00516701 7.59976 0.00528193Z"
              fill="black"
            />
          </svg>
        </span>
      </button>
      <motion.ul
        variants={heightVariant}
        initial="hidden"
        animate={animationControl}
        className={clsx(
          "absolute bg-white rounded-lg  shadow-lg z-20 flex flex-col gap-4 overflow-hidden whitespace-nowrap",
          {}
        )}
      >
        {children}
      </motion.ul>
    </div>
  );
};

export default DropdownMenu;
