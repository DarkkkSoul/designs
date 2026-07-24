import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

function Talking({ githubUrl }) {
    const IMAGES = [
        "https://imgs.search.brave.com/yH9o949A4U8-vFbI5qgIy24Z86a1pDMK62rARTscIDo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDYv/NTQxLzE4OC9zbWFs/bC9iZWFyZGVkLW1h/bGUtY2FydG9vbi1j/aGFyYWN0ZXItd2l0/aC1zdW5nbGFzc2Vz/LW1pbmltYWxpc3Qt/Y2FydG9vbi1hdmF0/YXItcHJvZmlsZS1p/bGx1c3RyYXRpb24t/ZnJlZS12ZWN0b3Iu/anBn",
        "https://imgs.search.brave.com/PYl7cw3H7hGfK2kXB0T4je-YRoQsCPLJwJNAZ7KNvjk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjEv/NzcyLzI0My9zbWFs/bC9wb3J0cmFpdC1v/Zi1hLWhhbmRzb21l/LW1hbi1mYWNlLXNp/ZGUtdmlldy1ibG9u/ZGUtYmVhcmRlZC1w/b255dGFpbC1oYWly/LWF2YXRhci1mb3It/c29jaWFsLW1lZGlh/LWNvbG9yZWQtZm9y/LXByb2ZpbGUtdGVt/cGxhdGUtcHJpbnQt/c3RpY2tlci1wb3N0/ZXItZXRjLWZsYXQt/aWxsdXN0cmF0aW9u/LXZlY3Rvci5qcGc",
        "https://imgs.search.brave.com/ZDghsdzrQaRb6xnTTMElkDgJaLS7IboBoCy0DXOpDxY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ByZW1pdW0tcGhv/dG8vM2QtY2FydG9v/bi1hdmF0YXItbWFu/LW1pbmltYWwtM2Qt/Y2hhcmFjdGVyLWF2/YXRhci1wcm9maWxl/XzY1MjA1My0yMDc4/LmpwZz9zZW10PWFp/c19oeWJyaWQmdz03/NDAmcT04MA",
        "https://imgs.search.brave.com/Z5MdgFOdlubknLg9w-4C7m1KPPhB-t32En5l7r7eTXM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ByZW1pdW0tcGhv/dG8vM2QtbWFsZS1h/dmF0YXItZGVzaWdu/LXdoaXRlLWJhY2tn/cm91bmRfMTI3ODU4/Ny0xMDE3OC5qcGc_/c2VtdD1haXNfaHli/cmlkJnc9NzQwJnE9/ODA"
    ]

    const container = useRef(null)
    const boxRef = useRef(null)
    const imageRef = useRef(null)
    const headerRef = useRef(null)
    const upBtnRef = useRef(null)


    gsap.registerPlugin(useGSAP)
    const { contextSafe } = useGSAP({ scope: container })

    const handleClick = contextSafe((e) => {
        gsap.to(boxRef.current, {
            duration: 3,
            height: "13.5rem",
            borderRadius: 0,
            borderBottomLeftRadius: 6,
            borderBottomRightRadius: 6,
        })
        gsap.to(imageRef.current, {
            duration: 2,
            gap: "0.8rem",
        })
        gsap.to(upBtnRef.current, {
            y: -17,
            // opacity: 0,
            duration: 0.7,
            visibility: "hidden"
        })
        gsap.to(headerRef.current, {
            visibility: "visible",
            duration: 2,
        })
    })

    return (
        <div className='relative text-white/80 col-span-2 row-span-3 flex items-center justify-center' ref={container}>
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
                ref={boxRef}
                className='rounded-full w-65 h-16 bg-gray-200 flex items-center justify-between px-3 pr-5'>

                <div
                    ref={headerRef}
                    className="font-sans hidden text-black/55 border-b border-gray-400/70 rounded-t-[0.3rem] text-center bg-[#d3d3d3]/50 font-medium w-65 py-1.5 absolute top-0 left-0 right-0 z-50 shadow-[0px_0px_4px_0.4px_rgba(0,0,0,0.3),0px_0px_3px_0.2px_rgba(3,3,3,0.4)]">
                    <h5 className="">Voice Chat</h5>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-600 absolute right-2 top-2"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                    </svg>
                </div>

                <div
                    ref={imageRef}
                    className="flex flex-wrap items-center -space-x-2">
                    {
                        IMAGES.map((img, index) => {
                            return <img key={index} src={img} alt="" className='size-12.5 border-2 border-white rounded-full' />
                        })
                    }
                </div>

                <button
                    ref={upBtnRef}
                    onClick={handleClick}
                    className="text-gray-600 flex items-center space-x-0.5 cursor-pointer">
                    <span className="text-lg font-sans">+3</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={18}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-chevron-down-icon lucide-chevron-down"
                    >
                        <path d="m6 9 6 6 6-6" />
                    </svg>
                </button>

            </div>
        </div>
    )
}

export default Talking