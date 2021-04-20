import React from "react";
import "./styles/FrontPage.scss";
import Profilovka from "../../images/profilovka.jpg";
import { motion } from "framer-motion";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

export default function FrontPage() {
  return (
    <section>
      <div className="homeWrapper flex justify-center items-center flex-col">
        <div className="thumbnailos">
          <motion.img
            src={Profilovka}
            className="profilovka"
            alt=""
            whileHover={{ scale: 1.1 }}
            transition={transition}
          />
        </div>
      </div>
    </section>
  );
}
