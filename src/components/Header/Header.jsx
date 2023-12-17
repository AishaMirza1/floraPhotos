import PannenHover from "../../assets/utilstyles/PannelHover";
import styles from "./header.module.css";
import PropTypes from "prop-types";
export default function Header({ headerName }) {
  var characters = headerName?.split("");
  const isStoryPage = characters[0] === "s" ? true : false;

  return (
    <div
      className={
        isStoryPage
          ? `${styles.header} ${styles.storyBackGround}`
          : `${styles.header} ${styles.homeBackGround}`
      }
    >
      <div className={styles.pannelHover}>
        <PannenHover isStory={isStoryPage} />
        <p>{characters[0]}</p>
      </div>
      <div className={styles.pannelHover}>
        <PannenHover isStory={isStoryPage} />
        <p>{characters[1]}</p>
      </div>
      <div className={styles.pannelHover}>
        <PannenHover isStory={isStoryPage} />
        <p>{characters[2]}</p>
      </div>
      <div className={`${styles.exploreTagContainer} ${styles.pannelHover}`}>
        <PannenHover isStory={isStoryPage} />
        <p>{characters[3]}</p>
        {isStoryPage === false ? (
          <div className={styles.exploreHover}>
            <span>e</span>
            <span>x</span>
            <span>p</span>
            <span>l</span>
            <span>o</span>
            <span>r</span>
            <span>e</span>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className={styles.pannelHover}>
        <PannenHover isStory={isStoryPage} />
        <p>{characters[4]}</p>
      </div>
      <div className={styles.pannelHover}>
        <PannenHover isStory={isStoryPage} />
        <p>{characters[5]}</p>
      </div>
      <div className={styles.pannelHover}>
        <PannenHover isStory={isStoryPage} />
        <p>{characters[6]}</p>
      </div>
    </div>
  );
}
Header.propTypes = {
  headerName: PropTypes.string,
};
