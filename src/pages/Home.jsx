import gsap from 'gsap'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'

function Home() {
  gsap.registerPlugin(useGSAP)
  useGSAP(() => {
    gsap.to(".btn-grad", {
      "--angle": "360deg",
      repeat: -1,
      duration: 2,
      ease: "linear"
    })
  })

  return (
    <div className='flex items-center justify-center min-h-screen w-full flex-wrap bg-[#282828] text-gray-300 text-sm font-sans tracking-wide'>

      {/* <div className='absolute size-30 bg-white/80 rounded-full blur-3xl' /> */}

      <div className='flex gap-3 max-w-xl flex-wrap items-center justify-center'>
        <button className='btn-grad'>
          <span className='span-grad'>
            <Link to="/image-slider">Image Slider</Link>
          </span>
        </button>

        <button className='btn-grad'>
          <span className='span-grad'>
            <Link to="/icons">Icons</Link>
          </span>
        </button>

        <button className='btn-grad'>
          <span className='span-grad'>
            <Link to="/apple-designs">Apple Designs</Link>
          </span>
        </button>

        <button className='btn-grad'>
          <span className='span-grad'>
            <Link to="/svg">SVG</Link>
          </span>
        </button>

        <button className='btn-grad'>
          <span className='span-grad'>
            <Link to="/antigravity">Antigravity</Link>
          </span>
        </button>

        <button className='btn-grad'>
          <span className='span-grad'>
            <Link to="/playground">Playground</Link>
          </span>
        </button>

        <button className='btn-grad'>
          <span className='span-grad'>
            <Link to="/cursor">Cursor</Link>
          </span>
        </button>
      </div>

    </div>
  )
}

export default Home