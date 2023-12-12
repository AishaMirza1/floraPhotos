import { useParams } from "react-router-dom";
import { storyData } from "../storyData";
export default function Story() {
  const { id } = useParams();
  console.log(storyData);
  return (
    <>
      <h1>{storyData[id].storyName}</h1>
    </>
  );
}
