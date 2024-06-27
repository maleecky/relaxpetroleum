"use client";
import React, { useEffect, useState } from "react";
import styles from "./menu.module.css";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Nav from "./menu-items";

const Menu = () => {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isActive) {
      setIsActive(false);
    }
  }, [pathname]);
  useEffect(() => {
    if (isActive) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }
  }, [isActive]);
  return (
    <>
      <button
        onClick={() => {
          setIsActive(!isActive);
        }}
        className={`lg:hidden flex ${styles.button}`}
      >
        <div
          className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}
        ></div>
      </button>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
};

export default Menu;
