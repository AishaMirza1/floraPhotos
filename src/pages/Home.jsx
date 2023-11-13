import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <h1>hello home</h1>

      <p onClick={() => navigate("/stories", { replace: true })}> stories</p>
    </>
  );
}
