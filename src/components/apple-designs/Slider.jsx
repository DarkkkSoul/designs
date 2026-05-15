function Slider() {
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
        "pl-[max(1rem, calc((100vw-72rem)/2+1rem))]" +
        "pr-[max(1rem, calc((100vw-72rem)/2+1rem))]" +
        "scroll-pl-[max(1rem, calc((100vw-72rem)/2+1rem))]";

    return (
        <div className='w-full overflow-hidden py-30 space-y-10'>
            <div className='max-w-6xl mx-auto px-4'>
                <h2 className='text-5xl font-medium tracking-tight'>Get to know iPhone.</h2>
            </div>
            <div className={`flex gap-4 overflow-x-auto [scrollbar-width:none] snap-x snap-mandatory ${startendInset} border`}>
                {
                    items.map((i, index) => (
                        <div key={index} className="rounded-3xl snap-start h-170 w-90 p-10 shrink-0 overflow-hidden relative">
                            <img src={i.src} className="absolute inset-0 size-full object-cover" />
                            <div className="flex flex-col gap-3 relative z-10 text-white">
                                <h3 className="font-base text-md">{i.title}</h3>
                                <p className="text-2xl font-medium tracking-tight">{i.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Slider