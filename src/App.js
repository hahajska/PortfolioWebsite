import "./App.scss";
import Profilovka from "./images/profilovka.jpg";
import { motion } from "framer-motion";
import { FaBeer } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import Navbar from "./components/Navbar";
//import ProgressiveImage from "react-progressive-image";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

function App() {
  return (
    <section>
      <Navbar />
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

        {/*         <div className="infoWrapper">
          <AiFillGithub className="text-2xl mt-5 iconka" />
        </div> */}
      </div>
    </section>
  );
}

export default App;
