"use client";

import React from "react";
import logo from "@/../public/media/logo.png";
import Image from "next/image";
import Link from "next/link";
import { DropMenu } from "./dropdown-menu";
import Menu from "./menu";

const MainHeader = () => {
  return (
    <header className="flex justify-between px-[0.875rem]  lg:px-[2.5rem] max-[260px]:px-[0.3125rem] py-[1.375rem] items-center">
      <div>
        <div>
          <Link href="/">
            <div className="flex items-center ">
              <Image
                src={logo}
                width={65}
                height={65}
                alt=""
                className="max-[260px]:w-14 max-[260px]:h-14"
              />
              <div className="hidden uppercase min-[260px]:flex   flex-col">
                <h1 className="font-semibold leading-tight text-xl">Relax</h1>
                <h1 className="text-xs  leading-snug tracking-tighter">
                  Petroleum
                </h1>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex gap-6 text-[1.0625em] items-center">
        <div className="lg:flex gap-10 items-center hidden ">
          <DropMenu />
          <div>
            <Link href="/about-us">About us</Link>
          </div>
          <div>
            <Link href="/career">Career</Link>
          </div>
          <div>
            <Link href="/company">Company</Link>
          </div>
          <div className="flex items-center space-x-3">
            <div className="bg-textiaryForeground shadow icon rounded-full">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.211802 8.27554L11.7252 19.7889C11.8268 19.8904 11.9564 19.9591 12.0973 19.9863C12.2383 20.0135 12.3842 19.9978 12.5161 19.9414L18.211 17.5024C18.3189 17.456 18.4138 17.3839 18.4874 17.2923C18.561 17.2008 18.6111 17.0926 18.6332 16.9773C18.6553 16.8619 18.6489 16.7429 18.6144 16.6306C18.5799 16.5183 18.5184 16.4162 18.4354 16.3332L14.9782 12.8746C14.8715 12.7678 14.734 12.6973 14.5851 12.6731C14.4362 12.6488 14.2834 12.672 14.1484 12.7394L12.578 13.5246L6.47471 7.42131L7.26135 5.85091C7.3289 5.71604 7.35234 5.56335 7.32834 5.41444C7.30434 5.26553 7.23411 5.12793 7.1276 5.02113L3.66755 1.56394C3.58441 1.48091 3.4822 1.41951 3.36985 1.38513C3.2575 1.35074 3.13843 1.34441 3.02307 1.36668C2.9077 1.38896 2.79955 1.43917 2.70808 1.51292C2.61662 1.58667 2.54461 1.68171 2.49837 1.78972L0.057926 7.48458C0.00147514 7.61658 -0.0141739 7.76244 0.0129936 7.90341C0.0401612 8.04437 0.108901 8.17398 0.210364 8.27554H0.211802ZM1.5708 7.60251L3.40294 3.33136L5.74416 5.67402L5.19049 6.77992L4.72742 7.70605L5.45941 8.43948L11.5613 14.5413L12.2947 15.2747L13.2208 14.8102L14.3281 14.258L16.6694 16.5978L12.3982 18.4285L1.5708 7.60251ZM9.93333 5.75312V4.31502C11.459 4.31502 12.9221 4.92107 14.0009 5.99985C15.0797 7.07863 15.6857 8.54178 15.6857 10.0674H14.2476C14.2476 8.92318 13.7931 7.82583 12.984 7.01674C12.1749 6.20766 11.0775 5.75312 9.93333 5.75312ZM9.93333 1.43883V0.000732422C12.6032 0.000732422 15.1637 1.06132 17.0515 2.94919C18.9394 4.83706 20 7.39756 20 10.0674H18.5619C18.5619 7.77896 17.6528 5.58425 16.0347 3.96608C14.4165 2.34791 12.2218 1.43883 9.93333 1.43883Z"
                  fill="white"
                />
              </svg>
            </div>
            <Link href="tel:+255748711711" className="cursor">
              <div className="leading-snug">
                <div className="text-sm">Call us on</div>
                <div>+255 748 711 711</div>
              </div>
            </Link>
          </div>
        </div>
        <div className="min-[480px]:block hidden">
          <Link
            className="bg-textiaryForeground text-xs tracking-wider py-4 px-6 text-white rounded-full"
            href="/contact-us"
          >
            Send Inquire
          </Link>
        </div>

        <Menu />
      </div>
    </header>
  );
};

export default MainHeader;
