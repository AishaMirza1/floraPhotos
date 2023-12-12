import Gallary from "../components/gallary/Gallary";
import Contact from "../components/contact/Contact";

import About from "../components/About/About";
import MyGear from "../components/mygear/MyGear";
import Header from "../components/Header/Header";
export default function Home() {
  return (
    <>
      <Header headerName="harmony" />
      {/* <p
        style={{ height: "100vh" }}
      
      >
        {" "}
        stories
      </p> */}
      <Gallary />
      <About />
      <MyGear />
      <Contact />
    </>
  );
}
