import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

// eslint-disable-next-line react/prop-types
export default function MotionBottom({ children }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const control = useAnimation();
  const slideControl = useAnimation();
  useEffect(() => {
    if (inView) {
      control.start("visible");
      slideControl.start("visible");
    }
  }, [inView, control, slideControl]);

  return (
    <div ref={ref} className="relative overflow-hidden">
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
      <motion.div
        id="home"
        variants={{
          hidden: { top: 0 },
          visible: { top: "100%" },
        }}
        initial="hidden"
        animate={slideControl}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="absolute left-1 right-1 top-0 rounded-md bottom-0 z-10 bg-blue-400"
      ></motion.div>
    </div>
  );
}
