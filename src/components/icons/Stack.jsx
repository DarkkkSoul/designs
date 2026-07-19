import React from 'react'

function Stack() {
    return (
        <div className='flex items-center justify-center perspective-[1000px] relative row-span-3 col-span-2 bg-[#282828]'>
            <div className='bg-purple-300 size-50 blur-2xl rounded-full absolute' />
            <div className='relative transform-3d w-50 h-50 rotate-z-43 rotate-x-65'>
                {/* top & btm  */}
                <div className='absolute w-50 h-50 bg-linear-to-r from-white to-purple-500 translate-z-10 ' />
                <div className='absolute w-50 h-50 bg-green-300 -translate-z-10' />

                 {/* left right    */}
                <div className='absolute w-50 h-20 bg-blue-300 -translate-y-10 rotate-x-90' />
                <div className='absolute w-50 h-20 bg-linear-to-r from-purple-200 to-purple-800 translate-y-40 rotate-x-90' />

                <div className='absolute w-50 h-20 bg-linear-to-b to-purple-800 from-purple-400 translate-x-25 translate-y-15 -rotate-x-90 rotate-y-90' />

            </div>
        </div>
    )
}

export default Stack