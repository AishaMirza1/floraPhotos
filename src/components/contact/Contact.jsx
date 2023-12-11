import styles from "./contact.module.css";
import utilClasses from "../../assets/utilstyles/utilClasses.module.css";
import OnScrollRevealAnimation from "../../assets/utilstyles/OnScrollRevealAnimation";
export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <OnScrollRevealAnimation>
        <h3 className={utilClasses.primarySectionHeader}>Contact</h3>
      </OnScrollRevealAnimation>
      <OnScrollRevealAnimation>
        <div
          className={`${utilClasses.relativContainer} ${styles.lineHoverAnimation} `}
        >
          <h3 className={`${utilClasses.line} ${utilClasses.heading2}`}>
            gregory@flora.com
          </h3>
        </div>
      </OnScrollRevealAnimation>
      <OnScrollRevealAnimation>
        <div className={styles.contactList}>
          <ul>
            <li className={utilClasses.lineHoverAnimation}>
              <h3 className={utilClasses.line}>Twitter</h3>
            </li>
            <li className={utilClasses.lineHoverAnimation}>
              <h3 className={utilClasses.line}>Instagram</h3>
            </li>
            <li className={utilClasses.lineHoverAnimation}>
              <h3 className={utilClasses.line}>Unsplash</h3>
            </li>
          </ul>
        </div>
      </OnScrollRevealAnimation>
    </section>
  );
}
