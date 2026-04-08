import ImageCarousel from "../components/image-slider/ImageCarousel"
import "../styles/image-slider/slider.css"
function ImageSlider() {
    const images = [
        './image-slider/1.jpeg',
        './image-slider/2.jpeg',
        './image-slider/3.jpeg',
        './image-slider/4.jpeg',
        './image-slider/5.jpeg',
        './image-slider/6.jpeg',
    ]
    return (
        <div className='w-full h-screen bg-black overflow-hidden flex items-center justify-center relative z-0'>
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-red-500 w-230 h-90 rounded-full blur-[8rem]  z-0 opacity-80"></div>
            <ImageCarousel images={images} />
        </div>
    )
}

export default ImageSlider