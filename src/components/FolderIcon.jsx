function FolderIcon({ githubUrl }) {
    return (
        <div className='flex items-center justify-center col-span-2 row-span-2 perspective-[400px] relative'>
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

            <div className="w-45 h-45 rounded-full absolute bg-white blur-2xl" />

            {/* 👇 parent gets group */}
            <div className='relative w-44 h-36 transform-3d group'>

                {/* background */}
                <div className='absolute inset-0 bg-gray-900/70 rounded-2xl shadow-lg/45 shadow-black' />

                <div className="absolute bottom-7 rounded-lg left-1/2 -translate-x-3/4 bg-white opacity-90 hover:bg-gray-300/90 hover:opacity-100 hover:z-3 w-22 h-26 -rotate-15 group-hover:-translate-y-20 group-hover:-translate-x-25 z-2 transition-all duration-300 cursor-pointer"></div>
                <div className="absolute bottom-7 rounded-lg left-1/2 -translate-x-1/2 bg-white opacity-90 hover:bg-gray-300/90 hover:opacity-100 hover:z-3 w-22 h-26 -rotate-3 group-hover:-translate-y-20 z-2 transition-all duration-300 cursor-pointer"></div>
                <div className="absolute bottom-7 rounded-lg left-1/2 -translate-x-1/4 bg-white opacity-90 hover:bg-gray-300/90 hover:opacity-100 hover:z-3 w-22 h-26 rotate-10 group-hover:-translate-y-20 group-hover:translate-x-5 z-2 transition-all duration-300 cursor-pointer"></div>

                {/* glass flap */}
                <div
                    className='absolute bottom-0 left-0 right-0 h-3/4 
                    z-20 rounded-2xl rounded-tl-none 
                    
                    rotate-x-0 group-hover:-rotate-x-30
                    
                    transition-all duration-300 
                    
                    bg-linear-to-b from-white/30 to-black/90 backdrop-blur-2xl border border-white/40 
                    
                    origin-bottom transform-gpu will-change-transform'
                    style={{
                        transformStyle: 'preserve-3d'
                    }}
                />
            </div>

        </div>
    )
}

export default FolderIcon