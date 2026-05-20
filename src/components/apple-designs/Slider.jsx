import { useState } from "react";

function Slider() {

    const [isOpen, setIsOpen] = useState(false)

    const items = [
        {
            title: 'Innovation',
            description: 'Beautiful and durable, by design.',
            src: '/apple-designs/slider/1.jpg'
        },
        {
            title: 'Cutting-Edge Cameras',
            description: 'Picture your best photos and videos.',
            src: '/apple-designs/slider/2.jpg'
        },
        {
            title: 'Chip and Battery Life',
            description: 'Fast that lasts.',
            src: '/apple-designs/slider/3.jpg'
        },
        {
            title: 'iOS and Apple Intelligence',
            description: 'New look. Even more magic.',
            src: '/apple-designs/slider/4.jpg'
        },
        {
            title: 'Environment',
            description: 'Designed with the earth in mind.',
            src: '/apple-designs/slider/5.jpg'
        },
        {
            title: 'Privacy',
            description: 'Your data. Just where you want it.',
            src: '/apple-designs/slider/6.jpg'
        },
        {
            title: 'Peace of Mind',
            description: 'Helpful features. On and off the grid.',
            src: '/apple-designs/slider/7.jpg'
        }
    ]

    const startendInset =
        "pl-[max(1rem,calc((100vw-73rem)/2+1rem))] " +
        "pr-[max(1rem,calc((100vw-73rem)/2+1rem))] " +
        "scroll-pl-[max(1rem,calc((100vw-73rem)/2+1rem))]";

    return (
        <div className='w-full overflow-hidden py-30 space-y-10'>

            {isOpen && (
                <div className="fixed inset-0 bg-black/30 backdrop-blur-lg z-50 size-full">
                    <div className="bg-white rounded-3xl w-[80vw] h-[200vh] mx-auto mt-10">
                        <div className="bg-black text-white size-13 absolute right-45 top-15 rounded-full flex z-20 justify-center items-center">
                            <Icon />
                        </div>
                    </div>
                </div>
            )}


            <div className='max-w-6xl mx-auto px-4'>
                <h2 className='text-5xl font-medium tracking-tight'>Get to know iPhone.</h2>
            </div>
            <div className={`p-5 flex gap-6 overflow-x-auto [scrollbar-width:none] snap-x snap-mandatory ${startendInset}`}>
                {
                    items.map((i, index) => (
                        <button
                            onClick={() => setIsOpen(true)}
                            key={index}
                            className="flex text-left cursor-pointer hover:scale-102 transition-all duration-300 rounded-3xl snap-start h-170 w-90 p-10 shrink-0 overflow-hidden relative">
                            <img src={i.src} className="absolute inset-0 size-full object-cover" />
                            <div className="flex flex-col gap-3 relative z-10 text-white">
                                <h3 className="font-base text-md">{i.title}</h3>
                                <p className="text-2xl font-medium tracking-tight">{i.description}</p>
                            </div>
                            <div className="bg-white size-10 absolute right-4 bottom-4 rounded-full flex z-20 justify-center items-center">
                                <Icon />
                            </div>
                        </button>
                    ))
                }
            </div>
        </div>
    )
}

const Icon = () => {
    return (
        <svg className="icon-control icon-control-plus tile-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
            <path d="m24 16.5h-4.5v-4.5c0-.8286-.6719-1.5-1.5-1.5s-1.5.6714-1.5 1.5v4.5h-4.5c-.8281 0-1.5.6714-1.5 1.5s.6719 1.5 1.5 1.5h4.5v4.5c0 .8286.6719 1.5 1.5 1.5s1.5-.6714 1.5-1.5v-4.5h4.5c.8281 0 1.5-.6714 1.5-1.5s-.6719-1.5-1.5-1.5z"></path>
        </svg>
    )
}


export default Slider