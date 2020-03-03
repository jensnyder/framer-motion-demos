import React from 'react';
import { motion } from 'framer-motion';

export const Keyframes = () => (
  <motion.div
    className="demo-div"
    animate={{
      scale: [1, 2, 3, 2, 1],
      rotate: [0, 180, 270, 270, 0],
      borderRadius: ["20%", "30%", "50%", "30%", "20%"],
      backgroundColor: ["#21c7a8", "#21c7a8", "#addb67", "#addb67", "#21c7a8"],
    }}
    transition={{
      duration: 2,
      times: [0, 0.4, 0.5, 0.9, 1],
      loop: Infinity,
      repeatDelay: 1,
    }}
  />
);