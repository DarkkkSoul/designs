import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Flower } from 'lucide-react'
import React, { useRef } from 'react'

function Card({ githubUrl }) {

    const imgRef = useRef(null)
    const container = useRef(null)
    const flowerRef = useRef(null)

    const animateUp = () => {
        gsap.to(container.current, {
            height: 323,
            ease: "power2.inOut"
        })
        gsap.to(imgRef.current, {
            y: -1,
            ease: "power2.inOut"
        })
        gsap.to(flowerRef.current, {
            y: -42,
            x: 42,
            delay: 0.3,
            rotate: 45,
            ease: "power2.inOut",
        })
    }
    const animateDown = () => {
        gsap.to(container.current, {
            height: 172,
            ease: "power2.inOut"
        })
        gsap.to(imgRef.current, {
            y: 0,
            ease: "power2.inOut"
        })
        gsap.to(flowerRef.current, {
            x: -40,
            y: 20,
            rotate: 0,
            ease: "power2.inOut"
        })
    }

    return (
        <div className='size-80 flex items-end justify-center relative'>
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
            <div
                onMouseEnter={animateUp}
                onMouseLeave={animateDown}
                ref={container}
                className='h-43 w-96 py-5 px-3 shadow-[inset_-0.5px_-0.5px_10px_1px_rgba(255,255,255,0.4)] bg-linear-to-br from-pink-500 to-black/70 relative items-end flex rounded-xl '>
                <div
                    className='absolute inset-0 p-2 rounded-xl z-10'
                    ref={imgRef}

                >
                    <img src="/icons/card.jpg" className='rounded-xl border-2 border-white/70 shadow-[0px_0px_10px] shadow-pink-300' />
                </div>
                <div ref={flowerRef} className='absolute right-18 bottom-15 z-2'>
                    <Flower stroke-width="1" size={45} stroke='pink' opacity={0.8} />
                </div>
                <div className='flex flex-col justify-end font-playfair z-8 px-3 space-y-2'>
                    <h3 className='font-semibold text-2xl text-white uppercase tracking-tight'>Japan</h3>
                    <p className='text-md text-white/90'>Japan is known for its unique blend of ancient traditions, like cherry blossom viewing and tea ceremonies, with cutting-edge technology and modern urban life.</p>
                </div>
            </div>
        </div>
    )
}

export default Card
