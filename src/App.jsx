import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import ImageSlider from "./pages/ImageSlider";
import Icons from "./pages/Icons";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/image-slider" element={<ImageSlider />} />
      <Route path="/icons" element={<Icons />} />
    </Routes>
  )
}

export default App