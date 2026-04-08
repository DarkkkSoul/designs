import React, { useEffect, useState } from 'react';

function ImageCarousel({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = images.length;

  // Auto-advance every 2 seconds (right to left)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 2000);
    return () => clearInterval(interval);
  }, [total]);

  // Helper: get previous, active, next indices (circular)
  const getPrevIndex = () => (activeIndex - 1 + total) % total;
  const getNextIndex = () => (activeIndex + 1) % total;

  return (
    <div className="relative w-full flex justify-center items-center overflow-visible z-10">

      {/* Carousel container - visible area */}
      <div className="flex justify-center items-center gap-2 w-full max-w-5xl mx-auto">

        {/* Previous image */}
        <div
          className="transition-all duration-500 ease-out flex-none w-100 scale-70 opacity-60 z-50"
        >
          <img
            src={images[getPrevIndex()]}
            className="w-full h-auto object-cover rounded-lg"
            alt="previous"
          />
        </div>

        {/* Active (current) image */}
        <div
          className="transition-all w-75 scale-[1.3] duration-500 ease-out flex-none basis-auto shrink-0 grow-0 opacity-100 z-50"
        >
          <img
            src={images[activeIndex]}
            className="w-full h-auto object-cover rounded-lg shadow-2xl"
            alt="active"
          />
        </div>

        {/* Next image */}
        <div
          className="transition-all duration-500 ease-out flex-none w-100 scale-70 opacity-60 z-50"
        >
          <img
            src={images[getNextIndex()]}
            className="w-full h-auto object-cover rounded-lg"
            alt="next"
          />
        </div>

      </div>
    </div>
  );
}

export default ImageCarousel;