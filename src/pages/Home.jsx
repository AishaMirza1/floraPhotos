// import { useNavigate } from "react-router-dom";
import Gallary from "../components/gallary/Gallary";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import About from "../components/About/About";
import MyGear from "../components/mygear/MyGear";
import Header from "../components/Header/Header";
export default function Home() {
  // const navigate = useNavigate();

  return (
    <>
      <Header />
      {/* <p
        style={{ height: "100vh" }}
        onClick={() => navigate("/stories", { replace: true })}
      >
        {" "}
        stories
      </p> */}
      <Gallary />
      <About />
      <MyGear />
      <Contact />
      <Footer />
    </>
  );
}
