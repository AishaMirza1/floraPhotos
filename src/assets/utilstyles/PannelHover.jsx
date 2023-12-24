import { motion, useAnimation } from "framer-motion";
import styles from "./utilClasses.module.css";
import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
export default function PannenHover({ isStory, isIndividualStoryPage }) {
  const ref = useRef(null);

  const mainControls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    if (isHovered) {
      mainControls.start("complete");
    }
  }, [isHovered, mainControls]);
  return (
    <motion.span
      ref={ref}
      className={
        isStory || isIndividualStoryPage
          ? `${styles.pannelHover} ${styles.storyPannelColor}`
          : `${styles.pannelHover} ${styles.homePannelColor}`
      }
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      variants={{
        complete: { width: 0 },
      }}
      animate={mainControls}
      transition={{ duration: 0.2 }}
    ></motion.span>
  );
}
PannenHover.propTypes = {
  isStory: PropTypes.bool,
  isIndividualStoryPage: PropTypes.bool,
};
