import { HashLink } from "react-router-hash-link";
import styles from "./navbar.module.css";
import { useState } from "react";
import utilClasses from "../../assets/utilstyles/utilClasses.module.css";
import { motion, AnimatePresence } from "framer-motion";
export default function Navbar() {
  const [showMobileNav, setMobileNav] = useState(false);
  return (
    <nav className={styles.nav}>
      <div className={styles.fadeBack}>
        <h1>Flora</h1>
      </div>
      <div className={styles.fadeBack}>
        <button onClick={() => setMobileNav(!showMobileNav)}>
          <span></span>
        </button>
        <AnimatePresence>
          <motion.div
            variants={{
              hidden: { clipPath: "circle(2% at 96.3% 14%)" },
              visible: { clipPath: "circle(100%)" },
            }}
            transition={{ duration: 0.5 }}
            animate={showMobileNav ? "visible" : "hidden"}
            className={styles.navContainer}
            exit={{ clipPath: "circle(2% at -96.3% -5.9%)" }}
          >
            {showMobileNav && (
              <ul>
                <li className={utilClasses.lineHoverAnimation}>
                  <HashLink to="/#gallary">
                    <h3 className={utilClasses.line}>gallary</h3>
                  </HashLink>
                </li>
                <li className={utilClasses.lineHoverAnimation}>
                  <HashLink to="/#story">
                    <h3 className={utilClasses.line}>Stories</h3>
                  </HashLink>
                </li>
                <li className={utilClasses.lineHoverAnimation}>
                  <HashLink to="/#aboutme">
                    <h3 className={utilClasses.line}>About me</h3>
                  </HashLink>
                </li>
                <li className={utilClasses.lineHoverAnimation}>
                  <HashLink to="/#gear">
                    <h3 className={utilClasses.line}>gear</h3>
                  </HashLink>
                </li>
                <li className={utilClasses.lineHoverAnimation}>
                  <HashLink to="/#contact">
                    <h3 className={utilClasses.line}>contact</h3>
                  </HashLink>
                </li>
              </ul>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </nav>
  );
}
