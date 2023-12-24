import styles from "./fullScreen.module.css";
import PropTypes from "prop-types";
import { storyData } from "../../storyData";
// import { HashLink } from "react-router-hash-link";
import utilClasses from "../../assets/utilstyles/utilClasses.module.css";
export default function FullScreen({ setFullScreen, selectedImgId }) {
  return (
    <div className={styles.fullScreen} id="fullScreen">
      <div className={styles.fullScreenContainer}>
        <li className={utilClasses.lineHoverAnimation}>
          <h3
            onClick={() => {
              setFullScreen(false);
            }}
            className={utilClasses.line}
          >
            Close
          </h3>
        </li>
        <img src={storyData[selectedImgId - 1].src} />
      </div>
    </div>
  );
}
FullScreen.propTypes = {
  setFullScreen: PropTypes.func,
  selectedImgId: PropTypes.string,
};
