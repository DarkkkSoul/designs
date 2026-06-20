import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import ImageSlider from "./pages/ImageSlider";
import Icons from "./pages/Icons";
import AppleDesigns from "./pages/AppleDesigns";
import "./index.css"
import SVG from "./pages/SVG";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/image-slider" element={<ImageSlider />} />
      <Route path="/icons" element={<Icons />} />
      <Route path="/apple-designs" element={<AppleDesigns />} />
      <Route path="/svg" element={<SVG />} />
    </Routes>
  )
}

export default App