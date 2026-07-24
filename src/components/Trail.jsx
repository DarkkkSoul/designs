import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

function Trail({ githubUrl }) {
    const container = React.useRef(null)

    gsap.registerPlugin(useGSAP)
    const { contextSafe } = useGSAP({ scope: container })

    const handleMove = contextSafe((e) => {
        const { clientX, clientY } = e;
        const rect = container.current.getBoundingClientRect()
        let x = clientX - rect.left
        let y = clientY - rect.top

        const circles = container.current.querySelectorAll(".cursorRef")
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
        <div className='relative font-serif items-center row-span-2 justify-center flex w-full h-full text-2xl text-white/80 uppercase col-span-2'
            ref={container}
            onMouseMove={handleMove}
            onMouseEnter={() => { gsap.to(container.current.querySelectorAll(".cursorRef"), { autoAlpha: 1, scale: 1 }) }}
            onMouseLeave={() => { gsap.to(container.current.querySelectorAll(".cursorRef"), { autoAlpha: 0, scale: 0 }) }}
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
            <p className='text-center'>Trail Cursor <br />Animation</p>
            <div className='cursorRef absolute top-0 left-0' />
            <div className='cursorRef absolute top-0 left-0' />
            <div className='cursorRef absolute top-0 left-0' />
            <div className='cursorRef absolute top-0 left-0' />
            <div className='cursorRef absolute top-0 left-0' />
            <div className='cursorRef absolute top-0 left-0' />
            <div className='cursorRef absolute top-0 left-0' />
            <div className='cursorRef absolute top-0 left-0' />
            <div className='cursorRef absolute top-0 left-0' />
            <div className='cursorRef absolute top-0 left-0' />
        </div>
    )
}

export default Trail
