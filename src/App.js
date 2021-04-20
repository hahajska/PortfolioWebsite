import "./App.scss";
import Profilovka from "./images/profilovka.jpg";
import { motion } from "framer-motion";
import { FaBeer } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import Navbar from "./components/Navbar";
import FrontPage from "./components/FrontPage";
//import ProgressiveImage from "react-progressive-image";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

function App() {
  return (
    <>
      <Navbar />
      <FrontPage />
    </>
  );
}

export default App;
