import React, { useState } from 'react';
import { motion } from 'framer-motion';

// const list = {
//   visible: { opacity: 1 },
//   hidden: { opacity: 0 },
// }
const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
}
const item = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 100 },
}

export const Variants = () => {
  const [clicked, setClicked] = useState(true);

  return (
    <motion.ul
      className="demo-ul"
      onClick={() => setClicked(!clicked)}
      animate={clicked ? "visible" : "hidden"}
      variants={list}
    >
      <motion.li variants={item}>One</motion.li>
      <motion.li variants={item}>Two</motion.li>
      <motion.li variants={item}>Three</motion.li>
    </motion.ul>
  );
};
