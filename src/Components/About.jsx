
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
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
      className="border-b border-neutral-900 pb-4"
    >
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={variants}
        className="my-20 text-center text-4xl"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex item-center justify-center">
            <motion.img
              src={aboutImg}
              alt="about"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={variants}
              className="rounded-2xl"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={variants}
              className="my-2 max-w-xl py-6"
            >
              {ABOUT_TEXT}
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;