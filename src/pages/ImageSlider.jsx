import ImageCarousel from "../components/image-slider/ImageCarousel"

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
        <div className='w-full h-screen bg-gray-800 text-2xl flex items-center justify-center'>
            <ImageCarousel images={images} />
        </div>
    )
}

export default ImageSlider