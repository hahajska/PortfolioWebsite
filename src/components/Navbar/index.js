import React, { useState } from "react";
import "./styles/Navbar.scss";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const handleActive = () => {
    setIsActive(!isActive);
  };

  const AnimaceNavbar = {
    hidden: {
      x: 850,
      y: -1350,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
    show: {
      x: 525,
      y: -1020,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        staggerChildren: 0.5,
      },
    },
  };

  const AnimaceChildren = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <div
        className={isActive ? " hamburger isActive" : "hamburger "}
        onClick={handleActive}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <motion.div
        onClick={() => setIsOpen(!isOpen)}
        className="menuWrapper flex justify-end items-start flex-col"
        variants={AnimaceNavbar}
        animate={isActive ? "show" : "hidden"}
        initial="hidden"
      >
        <div className="textList">
          <motion.li variants={AnimaceChildren}>Home</motion.li>
          <motion.li variants={AnimaceChildren}>Support</motion.li>
          <motion.li variants={AnimaceChildren}> Pricing</motion.li>
        </div>
      </motion.div>
    </>
  );
}
