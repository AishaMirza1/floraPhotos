import { useNavigate } from "react-router-dom";

export default function Stories() {
  const navigate = useNavigate();
  return (
    <>
      <h1>hello Stories</h1>
      <p onClick={() => navigate("/")}>home</p>

      <p onClick={() => navigate("story")}>Story1</p>
      <p>Story1</p>
      <p>Story1</p>
      <p>Story1</p>
    </>
  );
}
