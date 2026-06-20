import React from 'react'

function SVG() {
    return (
        <div>
            <svg height="200" width="200"
                viewBox='0 0 100 100' stroke='red'>
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
        </div>
    )
}

export default SVG