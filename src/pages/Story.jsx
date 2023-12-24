import { useParams } from "react-router-dom";
import { storyData } from "../storyData";
import Header from "../components/Header/Header";
import ScrollIntoView from "react-scroll-into-view";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { useEffect, useState } from "react";
import FullScreen from "../components/fullScreen/FullScreen";
import utilClasses from "../assets/utilstyles/utilClasses.module.css";
export default function Story() {
  const [fullScreen, setFullScreen] = useState(false);
  useEffect(() => {
    fullScreen ? disableBodyScroll(document) : enableBodyScroll(document);
  }, [fullScreen]);
  const { id } = useParams();
  console.log(storyData, id);
  return (
    <div className={utilClasses.story}>
      {fullScreen && (
        <FullScreen setFullScreen={setFullScreen} selectedImgId={id} />
      )}
      <Header headerName="" />
      <div className={utilClasses.storyData}>
        <ScrollIntoView selector="#fullScreen">
          <div>
            <h3 id={`${id}`} onClick={() => setFullScreen(true)}>
              FullScreen
            </h3>
          </div>
          <div className={utilClasses.storyHeaderDateContainer}>
            <h2 className={utilClasses.heading2}>{storyData[id].fullName}</h2>
            <p>{storyData[id].date}</p>
          </div>
        </ScrollIntoView>
      </div>
    </div>
  );
}
