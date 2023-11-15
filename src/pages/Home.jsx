import { useNavigate } from "react-router-dom";
import Gallary from "../components/gallary/Gallary";
import Contact from "../components/contact/Contact";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <h1>hello home</h1>
      <p
        style={{ height: "100vh" }}
        onClick={() => navigate("/stories", { replace: true })}
      >
        {" "}
        stories
      </p>
      <Gallary />
      <Contact />
    </>
  );
}
