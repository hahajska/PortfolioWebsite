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
      transition: { duration: 1.5, ease: "easeInOut" },
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
        className="menuWrapper"
        variants={AnimaceNavbar}
        animate={isActive ? "show" : "hidden"}
        initial="hidden"
      ></motion.div>
    </>
  );
}
