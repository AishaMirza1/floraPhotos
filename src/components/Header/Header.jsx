import PannenHover from "../../assets/utilstyles/PannelHover";
import styles from "./header.module.css";
import PropTypes from "prop-types";
import { storyData } from "../../storyData";
import { useParams } from "react-router-dom";
export default function Header({ headerName }) {
  const { id } = useParams();
  var characters = headerName?.split("");
  const isStoryPage = characters[0] === "s" ? true : false;
  const isIndividualStoryPage = headerName === "" ? true : false;
  const imgsrc = isIndividualStoryPage
    ? `${storyData[id - 1].src}`
    : isStoryPage
    ? ""
    : "https://www.pixel4k.com/wp-content/uploads/2018/10/starry-night-sky-evening-blue-landscape-4k_1540144784.jpg";

  return (
    <div
      className={
        isStoryPage
          ? `${styles.header} ${styles.storyBackGround}`
          : `${styles.header} ${styles.homeBackGround}`
      }
      style={{
        backgroundImage: `url(${imgsrc})`,
      }}
    >
      {" "}
      {isIndividualStoryPage && (
        <p className={styles.storyName}>{storyData[id - 1].storyName}</p>
      )}
      <div className={styles.pannelHover}>
        <PannenHover
          isStory={isStoryPage}
          isIndividualStoryPage={isIndividualStoryPage}
        />
        <p className={styles.headerParagraph}>{characters[0]}</p>
      </div>
      <div className={styles.pannelHover}>
        <PannenHover
          isStory={isStoryPage}
          isIndividualStoryPage={isIndividualStoryPage}
        />
        <p>{characters[1]}</p>
      </div>
      <div className={styles.pannelHover}>
        <PannenHover
          isStory={isStoryPage}
          isIndividualStoryPage={isIndividualStoryPage}
        />
        <p>{characters[2]}</p>
      </div>
      <div className={`${styles.exploreTagContainer} ${styles.pannelHover}`}>
        <PannenHover
          isStory={isStoryPage}
          isIndividualStoryPage={isIndividualStoryPage}
        />
        <p>{characters[3]}</p>
      </div>
      <div className={styles.pannelHover}>
        <PannenHover
          isStory={isStoryPage}
          isIndividualStoryPage={isIndividualStoryPage}
        />
        <p>{characters[4]}</p>
      </div>
      <div className={styles.pannelHover}>
        <PannenHover
          isStory={isStoryPage}
          isIndividualStoryPage={isIndividualStoryPage}
        />
        <p>{characters[5]}</p>
      </div>
      <div className={styles.pannelHover}>
        <PannenHover
          isStory={isStoryPage}
          isIndividualStoryPage={isIndividualStoryPage}
        />
        <p>{characters[6]}</p>
      </div>
    </div>
  );
}
Header.propTypes = {
  headerName: PropTypes.string,
};
