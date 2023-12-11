import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function OnScrollRevealAnimation({ children }) {
  const mainControls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <motion.div
      ref={ref}
      style={{ position: "relative", overflow: "hidden" }}
      variants={{
        initial: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="initial"
      animate={mainControls}
      transition={{ duration: 2 }}
    >
      {children}
    </motion.div>
  );
}
