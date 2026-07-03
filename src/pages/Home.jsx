import { Link } from 'react-router'

function Home() {
  return (
    <div className='overflow-hidden'>
      <Link to="/image-slider">Image Slider</Link>
      <Link to="/icons">Icons</Link>
      <Link to="/apple-designs">Apple Designs</Link>
      <Link to="/svg">SVG</Link>
      <Link to="/antigravity">Antigravity</Link>
    </div>
  )
}

export default Home