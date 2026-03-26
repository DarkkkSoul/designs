import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import ImageSlider from "./pages/ImageSlider";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/image-slider" element={<ImageSlider />} />
    </Routes>
  )
}

export default App
