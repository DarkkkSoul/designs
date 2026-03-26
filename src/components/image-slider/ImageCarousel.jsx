import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useEffect, useState } from 'react'

function ImageCarousel({ images }) {
    const [imageIndex, setImageIndex] = useState(0)

    const handlePrev = () => {
        setImageIndex(prev => {
            if (prev === 0) return images.length - 1
            return prev - 1
        })
    }
    const handleNext = () => {
        setImageIndex(prev => {
            if (prev === images.length - 1) return 0
            return prev + 1
        })
    }

    useEffect(() => {

        // const interval = setInterval(() => {
        //     setImageIndex(prev => {
        //         if (prev === images.length - 1) return 0
        //         return prev + 1
        //     })
        // }, 2000);

        // return () => clearInterval(interval)
    }, [images.length])



    return (
        <div className='max-w-md h-[40vw] flex items-center justify-center gap-x-10'>
            <button onClick={handlePrev}>
                <ChevronLeft size={30} color='white' />
            </button>

            <div className='overflow-hidden w-full h-full flex'>
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        className='w-full h-full object-cover transition-transform duration-500 ease-in-out shrink-0 grow-0'
                        style={{
                            transform: `translateX(-${imageIndex * 100}%)`
                        }}
                    />
                ))}
            </div>

            <button onClick={handleNext}>
                <ChevronRight size={30} color='white' />
            </button>
        </div>
    )
}

export default ImageCarousel