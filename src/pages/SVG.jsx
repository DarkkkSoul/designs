import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { MorphSVGPlugin } from 'gsap/all'
import React, { useRef, useState } from 'react'

function SVG() {

    gsap.registerPlugin(useGSAP, MorphSVGPlugin)

    // PLAY & PAUSE
    const container = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const PLAY = {
        LEFT: "M 27, 25 L 37,33 L 37, 40 L 27, 48Z",
        RIGHT: "M 37,33 L 41, 36.5 L 37, 40"
    }
    const PAUSE = {
        LEFT: "M 27,25 L 30, 25 L 30, 45 L 27, 45",
        RIGHT: "M 37,25 L 40, 25 L 40, 45 L 37, 45",
    }
    const TARGET = isPlaying ? PAUSE : PLAY
    useGSAP(() => {

        const TARGETLEFT = isPlaying ? PAUSE.LEFT : PLAY.LEFT
        const TARGETRIGHT = isPlaying ? PAUSE.RIGHT : PLAY.RIGHT

        gsap.to("#left", {
            duration: 0.4,
            ease: "power1.inOut",
            morphSVG: {
                shape: TARGETLEFT,
                shapeIndex: "auto"
            }
        })
        gsap.to("#right", {
            duration: 0.4,
            ease: "power1.inOut",
            morphSVG: {
                shape: TARGETRIGHT,
                shapeIndex: "auto"
            }
        })

    }, { dependencies: [isPlaying], scope: container })

    return (

        // <div>
        //     <svg height="200" width="200"
        //         viewBox='0 0 100 100' stroke='red'>
        //         <rect height="100" width="100" x="0" y="0" fill='none' stroke='black' stroke-width="1" />
        //         <circle
        //             r="25"
        //             cx="50"
        //             cy="50"

        //         />
        //     </svg>
        //     <svg height="200" width="200"
        //         viewBox='100 100 200 200' stroke='red'>
        //         <path
        //             d='M 150, 150 L 200, 150
        //             M 150, 160 L 200, 160
        //             M 150, 170 L 200, 170
        //             '
        //             stroke="black"
        //             stroke-width="6"
        //         />
        //     </svg>
        //     <svg height="200" width="200"
        //         viewBox='100 100 200 200' stroke='red'>
        //         <path
        //             d='M 150, 150 L 170, 150
        //             M 153, 150, L 153 168

        //             M 180, 150 L 200, 150
        //             M 197, 150 L 197, 168

        //             M 150, 196 L 170, 196
        //             M 153, 196 L 153, 177

        //             M 180, 196 L 200, 196
        //             M 197, 196 L 197, 177
        //             '
        //             stroke="black"
        //             stroke-width="6"
        //         />
        //     </svg>

        //     <svg width="200" height="200" viewBox="-15 -15 70 70">
        //         <rect height="30" width="30" x="-15" y="-15"
        //             fill='none' stroke='black' stroke-width="1" />
        //         <circle r="6" />
        //         <path d='M 0, 8 L 0, 13'
        //             stroke='black'
        //             stroke-width="2"
        //             strokeLinecap='round'
        //             id='ray'
        //         />
        //         <use href='#ray' transform='rotate(45)' />
        //         <use href='#ray' transform='rotate(90)' />
        //         <use href='#ray' transform='rotate(135)' />
        //         <use href='#ray' transform='rotate(180)' />
        //         <use href='#ray' transform='rotate(225)' />
        //         <use href='#ray' transform='rotate(270)' />
        //         <use href='#ray' transform='rotate(315)' />
        //     </svg>


        //     <svg width="200" height="200">
        //         <path
        //             d='
        //                 M 50, 50 Q 75 25, 100 50
        //             '
        //             stroke='black'
        //         />
        //     </svg>

        //     <svg width="450" height="450">
        //         <rect width="450" height="450" fill='none' stroke-width="2" stroke='black' />
        //         <path
        //             d='
        //                 M 100 350 C 100 300, 300 300, 350 350
        //             '
        //             stroke='black'
        //             stroke-width='3'
        //             fill='none'
        //         />
        //     </svg>

        // </div>
        <div className='grid grid-cols-2 py-8'>

            <div className='flex flex-col items-center justify-center'>
                <h2 className='text-3xl font-bold tracking-wide'>Bell</h2>
                <svg width="200" height="200" viewBox="0 0 120 100">
                    <circle
                        r='32' cx="58" cy="50"
                        fill='#D1495B'
                    />
                    <rect width='15' height='10' x="50.5" y='10' fill='#F79257' />
                    <circle r='6' cx="58" cy='5' fill='none' stroke='#F79257' />
                </svg>
            </div>

            <div ref={container} className='flex flex-col items-center justify-center text-black'>
                <h2 className='text-3xl font-bold tracking-wide text-black'>Play & Pause</h2>
                <button
                    className='cursor-pointer'
                    onClick={() => setIsPlaying((prev) => !prev)}>
                    <svg width="200" height="200" viewBox="0 0 120 100">
                        <path id='left' d={PLAY.LEFT} fill="currentColor" />
                        <path id='right' d={PLAY.RIGHT} fill="currentColor" />
                    </svg>
                </button>
            </div>

            <div>
                <svg width="300" height="200" viewBox="0 0 200 200">

                    <path
                        d='M 70,170 L 210,170 L 140,90Z'
                        fill='#234236'
                        stroke='#234236'
                        stroke-width="1"
                    />
                    <path
                        d='M 80,140 L 200,140 L 140,70Z'
                        fill='#0C5C4C'
                        stroke='#0C5C4C'
                        stroke-width="1"
                    />
                    <path
                        d='M 90,110 L 190,110 L 140,40Z'
                        fill='#38755B'
                        stroke='#38755B'
                        stroke-width="1"
                    />
                    <rect width='30' height='20' fill='#A52A2A' x='125' y='170' />

                </svg>
            </div>

            <div>
                <svg width="300" height="200" viewBox="0 0 200 200">
                    <defs>
                        <radialGradient id='lg' cx="50%" cy="50%" fx="50%" fy="50%">
                            <stop stopColor='black' offset="0%" />
                            <stop stopColor='blue' offset="100%" />
                            {/* <stop stopColor='white' offset="100%" /> */}
                        </radialGradient>
                    </defs>
                    <circle r='70' cx="40" cy="100" fill='url(#lg)' />
                </svg>
            </div>


        </div>
    )
}

export default SVG