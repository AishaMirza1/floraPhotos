import "./App.css";
import ScrollToTop from "./assets/utilstyles/ScrollToTop.jsx";
import Footer from "./components/footer/Footer.jsx";
// import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./pages/Home";
import Stories from "./pages/Stories";
import Story from "./pages/Story";
import { Routes, Route, HashRouter } from "react-router-dom";
function App() {
  return (
    <>
      <HashRouter>
        {/* <Navbar />{" "} */}
        <ScrollToTop>
          <Routes>
            <Route index element={<Home />} />
            <Route path="stories" element={<Stories />} />
            <Route path={`stories/story/:id`} element={<Story />} />
          </Routes>{" "}
        </ScrollToTop>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
