import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import utilClasses from "../../assets/utilstyles/utilClasses.module.css";
import styles from "./storyPageStoryComponents.module.css";
export default function StoryPageStoryComponent({ story }) {
  return (
    <div className={styles.storyPageStoryComponent}>
      <img src={`${story?.src}`} id={story.id} />
      <div className={styles.storyData}>
        <p>{story.fullName}</p>
        <div className={styles.storyLinkContainer}>
          <div
            className={` ${utilClasses.lineHoverAnimation} ${styles.storyPageLink}`}
          >
            <Link to={`/stories/story/${story.id}`}>
              <h3 className={utilClasses.line}>Full Story</h3>
            </Link>
          </div>
          <span>{story.date}</span>
        </div>
      </div>
    </div>
  );
}
StoryPageStoryComponent.propTypes = {
  story: PropTypes.object,
  id: PropTypes.number,
};
