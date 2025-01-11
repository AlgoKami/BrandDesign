import "./App.css";
import { motion } from "framer-motion";
import image1 from "./assets/Right-Image.webp";
import image2 from "./assets/Bottom-Image.webp";

function App() {
  const text = "Making sense of artificial intelligence theory".split(" ");
  const text2 = "we makes Your brand design as a Memorable experience & relation between design and brand.".split(" ");
  
  return (
    <>
      <div className="w-full h-screen lg:overflow-hidden ">
        <div className="grid md:grid-cols-[2fr,1fr] grid-cols-[1fr]">
          <div className="text-white h-auto md:h-40 w-full md:w-3/4 p-5 md:p-14 flex flex-wrap">
            {text.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.2,
                }}
                className="mr-7 text-xl md:text-6xl"
              >
                {word}
              </motion.span>
            ))}
          </div>

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
              className="lg:text-4xl text-xl h-auto md:h-40 lg:h-[60vh] lg:-m-16 md:-m-10 m-0 z-10"
            >
              20-22
              </motion.h4>
              <img src={image1} alt="image1" className="w-fit object-contain" />
            </motion.div>
          </div>
        </div>

        <div className="flex lg:fixed bottom-0 mt-5 md:mt-32 lg:mt-0">
          <div className="flex md:flex-row text-white flex-col-reverse items-start">
          <motion.div
            initial={{ opacity: 0, translateY: 100, blur: 10 }}
            animate={{ opacity: 1, translateY: 0, blur: 0 }}
            transition={{ duration: 1 }}
            className="self-end"
          >
            <img src={image2} alt="image2" className="w-fit md:pl-10 px-5" />
           </motion.div>
           <div
            className="text-xl px-5 mb-5 md:mb-0 md:px-14 w-full md:w-1/3 flex flex-wrap"
          >
            {text2.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                }}
                className="mr-2 text-xl"
              >
                {word}
              </motion.span>
            ))}  
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
