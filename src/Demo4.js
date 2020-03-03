import React, { useRef } from 'react';
import { motion } from 'framer-motion';

export const Drag = () => {
  const dragAreaRef = useRef(null);

  return (
    <>
      <div
        className="drag-area"
        ref={dragAreaRef}
      />
      <motion.div
        className="demo-div"
        drag
        dragConstraints={dragAreaRef}
      />
    </>
  );
};
