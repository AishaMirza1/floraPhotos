import styles from "./navbar.module.css";
import utilClasses from "../../assets/utilstyles/utilClasses.module.css";
import { data } from "./data";

import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [showMobileNav, setMobileNav] = useState(false);
  return (
    <>
      <nav className={styles.header}>
        <div className={styles.headerLogoContainer}>
          <Link to="/">
            <h1>Flora</h1>
          </Link>
          <div className={styles.fadeBack}></div>
        </div>
        <div className={styles.NavContainer}>
          <div className={styles.fadeBackbtn}></div>
          <button onClick={() => setMobileNav(!showMobileNav)}>
            <span></span>
          </button>
        </div>
      </nav>
      <AnimatePresence>
        <motion.div
          variants={{
            hidden: { clipPath: "circle(2% at 96.3% 14%)", opacity: 0 },
            visible: { clipPath: "circle(100%)", opacity: 1 },
          }}
          transition={{
            duration: 0.75,
            ease: [0.76, 0, 0.24, 1],
          }}
          animate={showMobileNav ? "visible" : "hidden"}
          className={styles.navContainerInner}
          exit={{ clipPath: "circle(2% at -96.3% -5.9%)" }}
        >
          <AnimatePresence>{showMobileNav && <Nav />}</AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

function Nav() {
  return (
    <ul>
      {data.map((data, i) => {
        return (
          <li className={utilClasses.lineHoverAnimation} key={i}>
            <HashLink to={data.linkTo}>
              <h3 className={utilClasses.line}>{data.title}</h3>
            </HashLink>
          </li>
        );
      })}
    </ul>
  );
}
