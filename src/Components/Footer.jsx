import React from 'react';
import { motion } from 'framer-motion';

const swayAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Footer = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={swayAnimation}
      className="border-t border-neutral-400 py-4"
    >
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={swayAnimation}
        className="my-2 text-center text-3xl"
      >
        Get in Contact
      </motion.h2>
      <div className="flex flex-col items-center justify-center">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={swayAnimation}
          className="my-1 text-md"
        >
          Phone: (786) 970-9634
        </motion.p>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={swayAnimation}
          className="my-1 text-md"
        >
          Email: johnmaikol10@gmail.com
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Footer;