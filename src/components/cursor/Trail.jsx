import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

function Trail() {
    const container = React.useRef(null)

    gsap.registerPlugin(useGSAP)
    const { contextSafe } = useGSAP({ scope: container })

    const handleMove = contextSafe((e) => {
        const { clientX, clientY } = e;
        const rect = container.current.getBoundingClientRect()
        let x = clientX - rect.left
        let y = clientY - rect.top

        const circles = gsap.utils.toArray(".cursorRef")
        circles.forEach((c, i) => {
            gsap.to(c, {
                x: x - 14,
                y: y - 14,
                duration: 0.3 + i * 0.05,
                scale: (i - 5) / 5,
                scale: 1 - i / circles.length,
                ease: "power2.out",
                overwrite: "auto"
            })
        });

    })
    return (
        <div className='font-serif items-center row-span-2 justify-center flex w-full h-full text-3xl text-white/80 uppercase col-span-2'
            ref={container}
            onMouseMove={handleMove}
            onMouseEnter={() => { gsap.to(".cursorRef", { autoAlpha: 1, scale: 1 }) }}
            onMouseLeave={() => { gsap.to(".cursorRef", { autoAlpha: 0, scale: 0 }) }}
        >
            <p>Trail</p>
            <div className='cursorRef ' />
            <div className='cursorRef ' />
            <div className='cursorRef ' />
            <div className='cursorRef ' />
            <div className='cursorRef ' />
            <div className='cursorRef ' />
            <div className='cursorRef ' />
            <div className='cursorRef ' />
            <div className='cursorRef ' />
            <div className='cursorRef ' />
        </div>
    )
}

export default Trail