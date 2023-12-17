import Header from "../components/Header/Header";
import StoryPageStoryComponent from "../components/storyPageStoryComponents/StoryPageStoryComponent";
import { storyData } from "../storyData";
export default function Stories() {
  return (
    <div>
      <Header headerName="stories" />
      <div>
        {storyData.map((story) => {
          return <StoryPageStoryComponent story={story} key={story.id} />;
        })}
      </div>
    </div>
  );
}
