import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion"

export const Exit = () => {
  const [visible, setVisible] = useState(true);

  const variants = {
    // hidden: { opacity: 0, x: -200 },
    // visible: {
    //   opacity: 1,
    //   x: 0,
    //   transition: {
    //     duration: 1,
    //     delay: 1,
    //   }
    // },
    exit: {
      opacity: 0,
      x: -200,
      transition: {
        duration: 2,
      }
    }
  };

  return (
    <div className="container">
      <button
        className="set-visible-button"
        onClick={() => setVisible(!visible)}>
        {visible ? 'Hide' : 'Show'}
      </button>
      <AnimatePresence>
        {visible && (
          <motion.div
            variants={variants}
            className="demo-div"
            // initial="hidden"
            // animate="visible"
            exit="exit"
          />
        )}
      </AnimatePresence>
    </div>
  );
}