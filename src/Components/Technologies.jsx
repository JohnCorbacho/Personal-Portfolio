import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";

const swayAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const swayVariants = {
  sway1: {
    y: [0, -10, 0, 10, 0],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
  sway2: {
    y: [0, -15, 0, 15, 0],
    transition: {
      duration: 2.5,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
  sway3: {
    y: [0, -20, 0, 20, 0],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
  sway4: {
    y: [0, -12, 0, 12, 0],
    transition: {
      duration: 2.2,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
  sway5: {
    y: [0, -18, 0, 18, 0],
    transition: {
      duration: 2.8,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
  sway6: {
    y: [0, -14, 0, 14, 0],
    transition: {
      duration: 2.4,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const Technologies = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={swayAnimation}
      className="border-b border-neutral-800 pb-24"
    >
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={swayAnimation}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={swayVariants}
          animate="sway1"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={swayVariants}
          animate="sway2"
        >
          <TbBrandNextjs className="text-7xl" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={swayVariants}
          animate="sway3"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={swayVariants}
          animate="sway4"
        >
          <DiRedis className="text-7xl text-red-700" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={swayVariants}
          animate="sway5"
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={swayVariants}
          animate="sway6"
        >
          <BiLogoPostgresql className="text-7xl text-sky-700" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Technologies;