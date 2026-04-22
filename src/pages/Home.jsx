import { Link } from 'react-router'

function Home() {
  return (
    <div>
        <Link to="/image-slider">Image Slider</Link>
        <Link to="/icons">Icons</Link>
    </div>
  )
}

export default Home