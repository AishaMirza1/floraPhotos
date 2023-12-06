import styles from "./contact.module.css";
import utilClasses from "../../assets/utilstyles/utilClasses.module.css";
export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h3 className={utilClasses.primarySectionHeader}>Contact</h3>
      <div
        className={`${utilClasses.relativContainer} ${styles.lineHoverAnimation} `}
      >
        <h3 className={`${utilClasses.line} ${utilClasses.heading2}`}>
          gregory@flora.com
        </h3>
      </div>
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
      <div></div>
    </section>
  );
}
