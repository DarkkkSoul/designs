import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

function Stack({ githubUrl }) {
    const stackRef = useRef(null)
    const topRef = useRef(null)
    const leftRef = useRef(null)
    const frontRef = useRef(null)

    gsap.registerPlugin(useGSAP)
    const { contextSafe } = useGSAP({ scope: stackRef })

    const handleEnter = contextSafe(() => {
        gsap.to(topRef.current, {
            duration: 0.2,
            z: 48 - 2,
            ease: "power1.inOut"
        })
        gsap.to(leftRef.current, {
            duration: 0.2,
            y: 196 - 2,
            ease: "power1.inOut"
        })
        gsap.to(frontRef.current, {
            duration: 0.2,
            x: 128 - 2,
            ease: "power1.inOut"
        })
    })

    const handleLeave = contextSafe(() => {
        gsap.to(topRef.current, {
            duration: 0.2,
            z: 20,
            ease: "power1.inOut"
        })
        gsap.to(leftRef.current, {
            duration: 0.2,
            y: 180,
            ease: "power1.inOut"
        })
        gsap.to(frontRef.current, {
            duration: 0.2,
            x: 100,
            ease: "power1.inOut"
        })
    })

    return (
        <div className='flex items-center justify-center perspective-[1000px] relative row-span-3 col-span-2'
            ref={stackRef}
        >
            {githubUrl && (
                <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 right-3 z-10 text-white/60 hover:text-white transition-colors"
                >
                    <img src="/code.png" className="size-5" />
                </a>
            )}
            <div className='size-50 blur-2xl rounded-full absolute' />
            <div
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                className='relative transform-3d w-50 h-50 rotate-z-43 rotate-x-65'>
                {/* top */}
                <div className='absolute w-50 h-50 translate-z-5 bg-[#f2f2f2] uppercase text-6xl text-center flex items-center justify-center font-extralight' ref={topRef} >Hover Me</div>
                <div className='absolute w-50 h-50 -translate-z-5 border border-white border-dashed' />

                {/* left */}
                <div className='absolute w-50 h-10 -translate-y-5 rotate-x-90 border border-white border-dashed' />
                <div className='absolute w-50 h-10 translate-y-45 rotate-x-90 bg-[#f2f2f2]' ref={leftRef} />

                {/* front */}
                <div className='absolute w-50 h-10 translate-x-25 translate-y-20 -rotate-x-90 rotate-y-90 bg-[#f2f2f2]' ref={frontRef} />
                <div className='absolute w-50 h-10 -translate-x-25 translate-y-20 -rotate-x-90 rotate-y-90 border border-white border-dashed' />

            </div>
        </div>
    )
}

export default Stack