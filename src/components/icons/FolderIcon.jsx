import React from 'react'

function FolderIcon() {
    return (
        <div className='flex items-center justify-center w-70 h-70 perspective-[500px] bg-pink-300'>

            <div className='relative w-44 h-36 transform-3d '>

                <div className='absolute inset-0 bg-gray-900 rounded-2xl shadow-2xl shadow-black/60' />

                <div className='absolute bottom-0 left-0 right-0 h-full z-20 rounded-2xl overflow-hidden -rotate-x-42 bg-white/50 backdrop-blur-3xl origin-bottom'
                 style={{
                            transformStyle: 'preserve-3d'
                        }}>
                            
                </div>

            </div>

        </div>
    )
}

export default FolderIcon
