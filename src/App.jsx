import "./App.css";
import { motion } from "framer-motion";
import image1 from "./assets/Right-Image.webp";
import image2 from "./assets/Bottom-Image.webp";

function App() {
  return (
    <>
      <div className="w-full h-screen lg:overflow-hidden ">
        <div className="grid md:grid-cols-[2fr,1fr] grid-cols-[1fr]">
          <motion.h1
            initial={{ opacity: 0, translateX: -100, blur: 10 }}
            animate={{ opacity: 1, translateX: 0, blur: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white text-xl md:text-6xl w-full md:w-3/4 p-5 md:p-14"
          >
              Making sense of artificial intelligence theory
          </motion.h1>

          <div className="w-full flex md:justify-end justify-center">
            <motion.div
              initial={{ opacity: 0, translateX: 100, blur: 10 }}
              animate={{ opacity: 1, translateX: 0, blur: 0 }}
              transition={{ duration: 0.8 }}
              className="m-3 w-5/6 flex md:flex-row flex-col md:items-end items-center"
            >
              <motion.h4
              initial={{ opacity: 0, translateX: 100, blur: 10 }}
              animate={{ opacity: 1, translateX: 0, blur: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl md:h-[60vh] md:-m-16 z-10"
            >
              20-22
              </motion.h4>
              <img src={image1} alt="image1" className="w-fit object-contain" />
            </motion.div>
          </div>
        </div>

        <div className="flex lg:fixed bottom-0">
          <div className="flex md:flex-row text-white flex-col-reverse">
          <motion.div
            initial={{ opacity: 0, translateY: 100, blur: 10 }}
            animate={{ opacity: 1, translateY: 0, blur: 0 }}
            transition={{ duration: 1 }}
          >
            <img src={image2} alt="image2" className="w-fit md:pl-10 px-5" />
           </motion.div>
           <motion.p
            initial={{ opacity: 0, translateY: 100, blur: 10 }}
            animate={{ opacity: 1, translateY: 0, blur: 0 }}
            transition={{ duration: 1.3 }}
            className="text-xl p-5 md:px-14 w-full md:w-2/5"
          >
              we makes Your brand design as a Memorable experience & relation
              between design and brand.           
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
