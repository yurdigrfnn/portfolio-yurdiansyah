import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

// eslint-disable-next-line react/prop-types
export default function MotionBottom({ children }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const control = useAnimation();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [inView, control]);

  return (
    <div ref={ref}>
      <motion.div
        id="home"
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={control}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
