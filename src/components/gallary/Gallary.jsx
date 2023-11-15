import styles from "./gallary.module.css";
import { HashLink } from "react-router-hash-link";
import utilClasses from "../../assets/utilstyles/utilClasses.module.css";
import utilStyles from "../../assets/utilstyles/utilClasses.module.css";
export default function Gallary() {
  return (
    <section id="gallary" className={styles.gallary}>
      <h3 className={utilStyles.primarySectionHeader}>Gallary</h3>
      <div className={styles.gallaryGrid}>
        <div className={styles.imgContainer}>
          <ul>
            <li className={utilClasses.lineHoverAnimation}>
              <HashLink to="/#gallary">
                <h3 className={utilClasses.line}>FullScreen</h3>
              </HashLink>
            </li>
            <li className={utilClasses.lineHoverAnimation}>
              <HashLink to="/#gallary">
                <h3 className={utilClasses.line}>Visit Story</h3>
              </HashLink>
            </li>
          </ul>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNBLOA0GujGJgQuWXDxiR4wsC6BYXsPr1lHw&usqp=CAU" />
        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNBLOA0GujGJgQuWXDxiR4wsC6BYXsPr1lHw&usqp=CAU" />
        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNBLOA0GujGJgQuWXDxiR4wsC6BYXsPr1lHw&usqp=CAUU" />
        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNBLOA0GujGJgQuWXDxiR4wsC6BYXsPr1lHw&usqp=CAU" />
        </div>
      </div>
    </section>
  );
}
