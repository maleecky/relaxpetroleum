import React, { useState } from "react";
import styles from "./menu-items.module.css";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "./anim";
import NavLink from "./menu-links";
import Curve from "./curve";

const navItems = [
  {
    title: "About Us",
    href: "/about-us",
  },
  {
    title: "Careers",
    href: "/career",
  },
  {
    title: "Company",
    href: "/company",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function Nav() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className={styles.nav}
        >
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => {
            return (
              <NavLink
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
              ></NavLink>
            );
          })}
        </div>
      </div>
      <Curve />
    </motion.div>
  );
}
