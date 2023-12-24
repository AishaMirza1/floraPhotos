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
      {characters.map((character) => (
        <div className={styles.pannelHover} key={character}>
          <PannenHover isStory={isStoryPage} />
          <p>{character}</p>
        </div>
      ))}
    </div>
  );
}
Header.propTypes = {
  headerName: PropTypes.string,
};
