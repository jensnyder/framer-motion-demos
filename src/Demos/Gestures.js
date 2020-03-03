import React from 'react';
import { motion } from 'framer-motion';

export const Gestures = () => (
  <motion.button
    className="demo-button"
    whileHover={{
      scale: 1.5,
      backgroundColor: "#addb67",
    }}
    whileTap={{ scale: 0.8 }}
  />
);