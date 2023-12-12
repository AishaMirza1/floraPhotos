import styles from "./gallary.module.css";
import { Link } from "react-router-dom";
import utilClasses from "../../assets/utilstyles/utilClasses.module.css";
import Story from "./Story";

import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { storyData } from "../../storyData";
import FullScreen from "../fullScreen/FullScreen";
import { useEffect, useState } from "react";
import OnScrollRevealAnimation from "../../assets/utilstyles/OnScrollRevealAnimation";

export default function Gallary() {
  const [fullScreen, setFullScreen] = useState(false);
  const [selectedImgId, setSelectedImgId] = useState(0);

  useEffect(() => {
    fullScreen ? disableBodyScroll(document) : enableBodyScroll(document);
  }, [fullScreen]);
  return (
    <>
      {fullScreen ? (
        <FullScreen
          setFullScreen={setFullScreen}
          selectedImgId={selectedImgId}
        />
      ) : (
        <section id="gallary" className={styles.gallary}>
          <OnScrollRevealAnimation>
            <h3
              className={`${utilClasses.primarySectionHeader} ${styles.galleryHeader}`}
            >
              Gallary
            </h3>
          </OnScrollRevealAnimation>

          <div className={styles.gallaryGrid}>
            {storyData.map((story) => {
              return (
                <Story
                  story={story}
                  key={story.id}
                  id={story.id}
                  setFullScreen={setFullScreen}
                  setSelectedImgId={setSelectedImgId}
                />
              );
            })}
          </div>

          <div className={utilClasses.margin}>
            <div
              className={`${utilClasses.relativContainer} ${utilClasses.lineHoverAnimation} ${styles.storyPageLink}`}
            >
              <Link to="/stories">
                <h3 className={utilClasses.line}>Find The Stories</h3>
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
