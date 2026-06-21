import React from 'react'

function SVG() {
    return (
        <div>
            <svg height="200" width="200"
                viewBox='0 0 100 100' stroke='red'>
                <rect height="100" width="100" x="0" y="0" fill='none' stroke='black' stroke-width="1" />
                <circle
                    r="25"
                    cx="50"
                    cy="50"

                />
            </svg>
            <svg height="200" width="200"
                viewBox='100 100 200 200' stroke='red'>
                <path
                    d='M 150, 150 L 200, 150
                    M 150, 160 L 200, 160
                    M 150, 170 L 200, 170
                    '
                    stroke="black"
                    stroke-width="6"
                />
            </svg>
            <svg height="200" width="200"
                viewBox='100 100 200 200' stroke='red'>
                <path
                    d='M 150, 150 L 170, 150
                    M 153, 150, L 153 168

                    M 180, 150 L 200, 150
                    M 197, 150 L 197, 168

                    M 150, 196 L 170, 196
                    M 153, 196 L 153, 177

                    M 180, 196 L 200, 196
                    M 197, 196 L 197, 177
                    '
                    stroke="black"
                    stroke-width="6"
                />
            </svg>

            <svg width="200" height="200" viewBox="-15 -15 70 70">
                <rect height="30" width="30" x="-15" y="-15"
                    fill='none' stroke='black' stroke-width="1" />
                <circle r="6" />
                <path d='M 0, 8 L 0, 13'
                    stroke='black'
                    stroke-width="2"
                    strokeLinecap='round'
                    id='ray'
                />
                <use href='#ray' transform='rotate(45)' />
                <use href='#ray' transform='rotate(90)' />
                <use href='#ray' transform='rotate(135)' />
                <use href='#ray' transform='rotate(180)' />
                <use href='#ray' transform='rotate(225)' />
                <use href='#ray' transform='rotate(270)' />
                <use href='#ray' transform='rotate(315)' />
            </svg>


            <svg width="200" height="200">
                <path
                    d='
                        M 50, 50 Q 75 25, 100 50
                    '
                    stroke='black'
                />
            </svg>

            <svg width="450" height="450">
                <rect width="450" height="450" fill='none' stroke-width="2" stroke='black' />
                <path
                    d='
                        M 100 350 C 100 300, 300 300, 350 350
                    '
                    stroke='black'
                    stroke-width='3'
                    fill='none'
                />
            </svg>

        </div>
    )
}

export default SVG