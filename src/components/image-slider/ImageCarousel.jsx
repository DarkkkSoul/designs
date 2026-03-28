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

        const interval = setInterval(() => {
            setImageIndex(prev => {
                if (prev === images.length - 1) return 0
                return prev + 1
            })
        }, 2000);

        return () => clearInterval(interval)
    }, [images.length])


    const PREV_IMG = (imageIndex - 1 + images.length) % images.length
    const NEXT_IMG = (imageIndex + 1) % images.length


    return (
        <div className='flex w-[90%]'>
            {/* <button onClick={handlePrev}>
                <ChevronLeft size={30} color='white' />
            </button> */}

            {/* <div className='relative w-full h-full flex items-center justify-center gap-x-5 *:transition-all *:duration-500'>
                <img src={images[PREV_IMG]} className='w-full h-full opacity-30' />
                <img src={images[imageIndex]} className='w-full h-full' />
                <img src={images[NEXT_IMG]} className='w-full h-full opacity-30' />
            </div> */}

            <div className='w-full h-full flex items-center border gap-x-3' >
                {
                    images.map((image, index) => (
                        <div key={index} className='w-[20vw] border h-[30vw]' style={{
                            transform: `translateX(-${imageIndex * 100}%)`
                        }}>
                            <img src={image} className='w-full h-full object-cover' />
                        </div>
                    ))
                }
            </div>

            {/* <button onClick={handleNext}>
                <ChevronRight size={30} color='white' />
            </button> */}
        </div>
    )
}

export default ImageCarousel