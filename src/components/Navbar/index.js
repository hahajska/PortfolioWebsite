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
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1 } },
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
      <div className="menuWrapper">
        <h1>HEELLOOO</h1>
      </div>
      <motion.div
        onClick={() => setIsOpen(!isOpen)}
        className="forfun"
        variants={AnimaceNavbar}
        animate={isActive ? "show" : "hidden"}
        initial="hidden"
      >
        hellooooooooooooooo
      </motion.div>
    </>
  );
}
