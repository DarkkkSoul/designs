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
            <div className="flex items-center justify-center gap-[1em] group">
                <div className="card h-[5em] p-[1em] grow-0 shrink-0 bg-blue-300 content-center">1</div>
                <div className="card h-[5em] p-[1em] grow-0 shrink-0 bg-blue-300 content-center">2</div>
                <div className="card h-[5em] p-[1em] grow-0 shrink-0 bg-blue-300 content-center">3</div>
                <div className="card h-[5em] p-[1em] grow-0 shrink-0 bg-blue-300 content-center">4</div>
                <div className="card h-[5em] p-[1em] grow-0 shrink-0 bg-blue-300 content-center">5</div>
                <div className="card h-[5em] p-[1em] grow-0 shrink-0 bg-blue-300 content-center">6</div>
            </div>
            <div className="flex items-center justify-center gap-[1em] group">
                <div className="card h-[5em] p-[1em] grow-0 shrink-0 bg-blue-300 content-center">1</div>
                <div className="card h-[5em] p-[1em] grow-0 shrink-0 bg-blue-300 content-center">2</div>
                <div className="card h-[5em] p-[1em] grow-0 shrink-0 bg-blue-300 content-center">3</div>
                <div className="card h-[5em] p-[1em] grow-0 shrink-0 bg-blue-300 content-center">4</div>
                <div className="card h-[5em] p-[1em] grow-0 shrink-0 bg-blue-300 content-center">5</div>
                <div className="card h-[5em] p-[1em] grow-0 shrink-0 bg-blue-300 content-center">6</div>
            </div>
            {/* <ImageCarousel images={images} /> */}
        </div>
    )
}

export default ImageSlider