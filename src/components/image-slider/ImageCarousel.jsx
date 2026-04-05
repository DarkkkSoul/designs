import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useEffect, useState } from 'react'

function ImageCarousel({ images }) {
  const [imageIndex, setImageIndex] = useState(0)

  useEffect(() => {

      const interval = setInterval(() => {
          setImageIndex(prev => {
              if (prev === images.length - 1) return 0
              return prev + 1
          })
      }, 2000);

      return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="w-full flex justify-center overflow-hidden">

      {/* VIEWPORT */}
      <div className="w-[62%] overflow-hidden">

        {/* TRACK */}
        <div
          className="flex gap-x-1 transition-transform duration-300"
          style={{
            transform: `translateX(-${imageIndex * 20}vw)`
          }}
        >
          {[...images, ...images].map((image, index) => (
            <div
              key={index}
              className="shrink-0 w-[20vw] h-[20vw]"
            >
              <img
                src={image}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default ImageCarousel