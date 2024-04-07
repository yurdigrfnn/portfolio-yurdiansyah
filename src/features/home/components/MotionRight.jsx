import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

// eslint-disable-next-line react/prop-types
export default function MotionRight({ children, className }) {
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
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        id="home"
        variants={{
          hidden: { opacity: 0, x: 75 },
          visible: { opacity: 1, x: 0 },
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
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControl}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="absolute left-0 right-0 top-1 rounded-md bottom-1 z-10 bg-blue-400"
      ></motion.div>
    </div>
  );
}
