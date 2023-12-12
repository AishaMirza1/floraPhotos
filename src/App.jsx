import "./App.css";
import Footer from "./components/footer/Footer.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./pages/Home";
import Stories from "./pages/Stories";
import Story from "./pages/Story";
import { Routes, Route, HashRouter } from "react-router-dom";
function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="stories" element={<Stories />} />
          <Route path={`stories/story/:id`} element={<Story />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
