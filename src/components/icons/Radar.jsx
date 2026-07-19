import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

function Radar() {

    const lineRef = useRef(null)
    const c1Ref = useRef(null)
    const c2Ref = useRef(null)
    const c3Ref = useRef(null)
    const circleRef = useRef(null)

    gsap.registerPlugin(useGSAP)
    useGSAP(() => {
        gsap.to(lineRef.current, {
            rotation: 360,
            duration: 3,
            repeat: -1,
            ease: "linear",
            svgOrigin: "40 40",
            onRepeat: () => {
                gsap.fromTo(c1Ref.current,
                    { opacity: 0 },
                    {
                        opacity: 1,
                        duration: 0.2,
                        repeat: 3,
                        yoyo: true,
                        ease: "none",
                        delay: 0.5
                    }
                )
                gsap.fromTo(c2Ref.current,
                    { opacity: 0 },
                    {
                        opacity: 1,
                        duration: 0.2,
                        repeat: 3,
                        yoyo: true,
                        ease: "none",
                        delay: 1.7
                    }
                )
                gsap.fromTo(c3Ref.current,
                    { opacity: 0 },
                    {
                        opacity: 1,
                        duration: 0.2,
                        repeat: 3,
                        yoyo: true,
                        ease: "none",
                        delay: 2.4
                    }
                )
            }
        })
        gsap.to(circleRef.current, {
            attr: {
                r: 30
            },
            duration:2,
            repeat:-1,
            ease:"linear",
            opacity:0.1
        })
    })

    return (
        <div className='row-span-2 col-span-2 flex items-center justify-center relative'>
            <div className='relative flex items-center justify-center'>
                <div className='size-60 rounded-full bg-[#1c1d1d] shadow-[inset_0_0_5px_1px_#b2acab77] absolute' />
                <div className='size-40 rounded-full bg-[#1c1d1d] shadow-[inset_0_0_5px_1px_#b2acab77] absolute' />
                <div className='size-20 rounded-full bg-[#1c1d1d] shadow-[inset_0_0_5px_1px_#b2acab77] absolute' />
            </div>

            <svg
                className="z-10 absolute"
                width={320} height={320} viewBox="0 0 80 80">

                {/* for visualizing the view box */}
                {/* <rect
                    x="0"
                    y="0"
                    width="80"
                    height="80"
                    fill="white"
                    opacity={0.2}
                /> */}

                <circle ref={circleRef} r={2} cx={40} cy={40} stroke="#2FFE87" fill="none" strokeWidth={0.4} opacity={1} />

                <defs>
                    <linearGradient id="trail" x1="100%" x2="0%" y1="0%" y2="0%">
                        <stop offset="0%" stopColor="#2FFE87" stopOpacity={0.3} />
                        <stop offset="100%" stopColor="white" stopOpacity={0} />
                    </linearGradient>
                </defs>

                <circle ref={c1Ref} r={1} cx={60} cy={40} fill="#2FFE87" opacity={0} />
                <circle ref={c2Ref} r={1} cx={30} cy={46} fill="#2FFE87" opacity={0} />
                <circle ref={c3Ref} r={1} cx={25} cy={20} fill="#2FFE87" opacity={0} />

                <g ref={lineRef}>
                    {/* main line */}
                    <path
                        d="M 60 18 L 40 40"
                        fill="none"
                        stroke="#2FFE87"
                        strokeWidth={0.5}
                    />
                    {/* trail */}
                    <path
                        d="M 40 40 L 60 18 Q 50 10 ,40 10Z"
                        fill="url(#trail)"
                        strokeWidth={0.5}
                    />
                </g>

            </svg>

        </div>
    )
}

export default Radar
