import gsap from "gsap"

function Playground() {

    const tl = gsap.timeline({
        defaults: {
            duration: 1, rotate: 45
        }
    })
    tl.to("#green", { x: 500 })
        .to("#blue", { x: 500 }, 0.1)
        .to("#orange", { x: 500 })

    return (
        <div className=' min-h-screen flex flex-col'>
            <div className="flex space-x-4 p-10">
                <button
                    onClick={() => { tl.play() }}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg">Play</button>
                <button
                    onClick={() => { tl.pause() }}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg">Pause</button>
            </div>
            <div className="flex flex-col space-y-10 justify-center p-10 min-h-screen w-full">
                <div id="green" className='size-20 rounded-xl bg-[#0BE448]' />
                <div id="blue" className='size-20 rounded-xl bg-[#B5F2FF]' />
                <div id="orange" className='size-20 rounded-xl bg-[#FE9030]' />
            </div>
        </div>
    )
}

export default Playground