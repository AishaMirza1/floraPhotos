import { motion, AnimatePresence } from "framer-motion";
import utilClasses from "../../assets/utilstyles/utilClasses.module.css";
import styles from "./gallary.module.css";
import { useState } from "react";
import PropTypes from "prop-types";
import ScrollIntoView from "react-scroll-into-view";
import { Link } from "react-router-dom";
export default function Story({ story, id, setFullScreen, setSelectedImgId }) {
  const [moveOverlay, setMoveOverlay] = useState(false);
  const isEven = id % 2 === 0 ? true : false;
  function handleClick(e) {
    setSelectedImgId(e.target.id);
    setFullScreen(true);
  }
  return (
    <>
      <AnimatePresence>
        <div className={styles.story}>
          <motion.div
            className={
              moveOverlay === false
                ? styles.overlay
                : `${styles.overlay} ${styles.overOther}`
            }
            variants={{
              initial: { translateX: 0 },
              hover: { translateX: isEven ? "-100%" : "100%" },
            }}
            transition={{ duration: 0.5 }}
            animate={moveOverlay ? "hover" : "initial"}
          >
            {" "}
            {moveOverlay && (
              <p
                className={
                  isEven ? utilClasses.leftText : utilClasses.rightText
                }
              >
                {story?.storyName}
              </p>
            )}
          </motion.div>

          <motion.div
            className={`${styles.imgContainer} ${utilClasses.relativContainer}`}
            onMouseEnter={() => {
              setMoveOverlay(true);
            }}
            onMouseLeave={() => setMoveOverlay(false)}
          >
            <AnimatePresence>
              <motion.ul>
                <ScrollIntoView selector="#fullScreen">
                  <li className={utilClasses.lineHoverAnimationImgOverlay}>
                    <h3
                      id={`${id}`}
                      onClick={(e) => handleClick(e)}
                      className={utilClasses.line}
                    >
                      FullScreen
                    </h3>
                  </li>
                </ScrollIntoView>

                <li className={utilClasses.lineHoverAnimationImgOverlay}>
                  <Link to={`stories/story/${id}`}>
                    <h3 className={utilClasses.line}>Visit Story</h3>
                  </Link>
                </li>
              </motion.ul>
            </AnimatePresence>
            <img src={`${story?.src}`} id={story?.id} />
          </motion.div>
        </div>
      </AnimatePresence>
    </>
  );
}
Story.propTypes = {
  story: PropTypes.object,
  id: PropTypes.number,
  setFullScreen: PropTypes.func,
  setSelectedImgId: PropTypes.func,
};
