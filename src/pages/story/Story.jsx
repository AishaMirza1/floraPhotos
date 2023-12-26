import { useParams } from "react-router-dom";
import { storyData } from "../../storyData";
import Header from "../../components/Header/Header";
import ScrollIntoView from "react-scroll-into-view";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { useEffect, useState } from "react";
import FullScreen from "../../components/fullScreen/FullScreen";
import utilClasses from "../../assets/utilstyles/utilClasses.module.css";
import styles from "../story/story.module.css";
export default function Story() {
  const [fullScreen, setFullScreen] = useState(false);
  useEffect(() => {
    fullScreen ? disableBodyScroll(document) : enableBodyScroll(document);
  }, [fullScreen]);
  const { id } = useParams();
  console.log(storyData, id);
  return (
    <div className={styles.story}>
      {fullScreen && (
        <FullScreen setFullScreen={setFullScreen} selectedImgId={id} />
      )}
      <Header headerName="" />
      <div className={styles.storyData}>
        <ScrollIntoView selector="#fullScreen">
          <div className={utilClasses.lineHoverAnimation}>
            <h3 id={`${id}`} onClick={() => setFullScreen(true)}>
              FullScreen
            </h3>
          </div>
        </ScrollIntoView>
        <div className={styles.storyHeaderDateContainer}>
          <h2 className={utilClasses.heading2}>{storyData[id - 1].fullName}</h2>
          <p>{storyData[id - 1].date}</p>
        </div>
        <div className={styles.story1_story_2}>
          <p>{storyData[id - 1].stories.story1.p1}</p>
          <h4 className={styles.heading3}>
            {storyData[id - 1].stories.story1.p2}
          </h4>
          <p>{storyData[id - 1].stories.story1.p3}</p>
          <p>{storyData[id - 1].stories.story1.p4}</p>
          <h4 className={styles.heading3}>
            {storyData[id - 1].stories.story1.p5}
          </h4>
          <p>{storyData[id - 1].stories.story1.p6}</p>
          <p>{storyData[id - 1].stories.story1.p7}</p>
        </div>
        <img src={storyData[id - 1].storyImgSrc.src1} />
        <div className={styles.story1_story_2}>
          <h4 className={styles.heading3}>
            {storyData[id - 1].stories.story2.p1}
          </h4>
          <p>{storyData[id - 1].stories.story2.p2}</p>
          <p>{storyData[id - 1].stories.story2.p3}</p>
          <h4 className={styles.heading3}>
            {storyData[id - 1].stories.story2.p4}
          </h4>
          <p>{storyData[id - 1].stories.story2.p5}</p>
          <p>{storyData[id - 1].stories.story2.p6}</p>
        </div>
        <img src={storyData[id - 1].storyImgSrc.src2} />
      </div>
    </div>
  );
}
