import styles from "./footer.module.css";
import utilClasses from "../../assets/utilstyles/utilClasses.module.css";
export default function Footer() {
  return (
    <div className={styles.footer}>
      <ul>
        <li className={styles.lineHoverAnimation}>
          <h3 className={utilClasses.line}>thaer-swailem.com</h3>
        </li>
        <li className={styles.lineHoverAnimation}>
          <h3 className={utilClasses.line}>thaerswailem@gmail.com</h3>
        </li>
      </ul>
      <p>@2023</p>
    </div>
  );
}
