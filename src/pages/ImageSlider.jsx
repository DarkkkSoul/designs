import ImageCarousel from "../components/image-slider/ImageCarousel"
import "../styles/image-slider/slider.css"
function ImageSlider() {
    const images = [
        './image-slider/boys.jpeg',
        './image-slider/dune.jpeg',
        './image-slider/game-of-thrones.jpeg',
        './image-slider/money-heist.jpeg',
        './image-slider/stranger-things.jpeg',
        './image-slider/wednesday.jpeg',
    ]
    return (
        <div className='w-[90%] mx-auto bg-gray-800 overflow-hidden flex border-4 border-red-500'>
            <ImageCarousel images={images} />
        </div>
    )
}

export default ImageSlider