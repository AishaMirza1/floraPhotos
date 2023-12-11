import styles from "./header.module.css";
import PannenHover from "../../assets/utilstyles/PannelHover";
export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.pannelHover}>
        <PannenHover />
        <p>H</p>
      </div>
      <div className={styles.pannelHover}>
        <PannenHover />
        <p>A</p>
      </div>
      <div className={styles.pannelHover}>
        <PannenHover />
        <p>R</p>
      </div>
      <div className={`${styles.exploreTagContainer} ${styles.pannelHover}`}>
        <PannenHover />
        <p>M</p>
        <div className={styles.exploreHover}>
          <span>e</span>
          <span>x</span>
          <span>p</span>
          <span>l</span>
          <span>o</span>
          <span>r</span>
          <span>e</span>
        </div>
      </div>
      <div className={styles.pannelHover}>
        <PannenHover />
        <p>O</p>
      </div>
      <div className={styles.pannelHover}>
        <PannenHover />
        <p>N</p>
      </div>
      <div className={styles.pannelHover}>
        <PannenHover />
        <p>Y</p>
      </div>
    </div>
  );
}
