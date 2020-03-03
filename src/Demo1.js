import React from 'react';
import { motion } from 'framer-motion';

export const Animate = () => (
  <motion.div
    className="demo-div"
    animate={{
      scale: 2,
      rotate: 360,
      backgroundColor: '#addb67',
    }}
    transition={{
      duration: 2,
      ease: 'easeOut',
      yoyo: Infinity,
      repeatDelay: 1,
    }}
  />
);
