import React, { useState, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";

export const MotionValues = () => {
  const sliderValue = useMotionValue(0);
  const [xValue, setXValue] = useState(0);

  useEffect(
    () =>
      sliderValue.onChange(() => {
        setXValue(sliderValue.get());
      }),
    [sliderValue]
  );

  return (
    <>
      <div className="motion-area">
        <motion.div
          className="demo-div"
          animate={{
            x: xValue,
            rotate: (180 / 100) * xValue,
            scale: xValue / 300 + 1
          }}
        />
      </div>
      <div className="slider-drag-area">
        <motion.div
          className="slider"
          whileHover={{ scale: 1.1 }}
          drag="x"
          style={{ x: sliderValue }}
          dragConstraints={{ left: -145, right: 145 }}
          dragElastic={0}
        />
      </div>
    </>
  );
};
