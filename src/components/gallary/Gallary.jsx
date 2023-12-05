import styles from "./gallary.module.css";
import { HashLink } from "react-router-hash-link";
import utilClasses from "../../assets/utilstyles/utilClasses.module.css";
import Story from "./Story";

import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { storyData } from "../../storyData";
import FullScreen from "../fullScreen/FullScreen";
import { useEffect, useState } from "react";
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
          <h3 className={utilClasses.primarySectionHeader}>Gallary</h3>
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
              <HashLink to="/#gallary">
                <h3 className={utilClasses.line}>Find The Stories</h3>
              </HashLink>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
