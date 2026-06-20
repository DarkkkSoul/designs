import { Link } from 'react-router'

function Home() {
  return (
    <div>
      <Link to="/image-slider">Image Slider</Link>
      <Link to="/icons">Icons</Link>
      <Link to="/apple-designs">Apple Designs</Link>
      <Link to="/svg">SVG</Link>
    </div>
  )
}

export default Home