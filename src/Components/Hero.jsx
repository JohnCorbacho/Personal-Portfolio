import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/kevinRushProfile.png";
import { motion } from "framer-motion";

const Hero = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={variants}
      className="border-b border-neutral-900 pb-4 lg:mb-35"
    >
      <div className="flex flex-wrap lg:flex-nowrap">
        {/* Left section with text */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={variants}
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              John Corbacho
            </motion.h1>
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={variants}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={variants}
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* Right section with image */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center lg:justify-end">
            <motion.img
              src={profilePic}
              alt="John Corbacho"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={variants}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;