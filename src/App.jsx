import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import ImageSlider from "./pages/ImageSlider";
import AppleDesigns from "./pages/AppleDesigns";
import "./index.css"
import SVG from "./pages/SVG";
import Antigravity from "./pages/Antigravity";
import Playground from "./pages/Playground";
import Cursor from "./pages/Cursor";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/image-slider" element={<ImageSlider />} />
      <Route path="/apple-designs" element={<AppleDesigns />} />
      <Route path="/svg" element={<SVG />} />
      <Route path="/antigravity" element={<Antigravity />} />
      <Route path="/playground" element={<Playground />} />
      <Route path="/cursor" element={<Cursor />} />
    </Routes>
  )
}

export default App