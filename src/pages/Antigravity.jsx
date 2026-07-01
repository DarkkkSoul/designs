import React from 'react'
import { Cpu, Brain, NotebookPen, Languages, DatabaseZap, BrickWallFire } from "lucide-react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const ICONS = [
    Cpu,
    Brain,
    NotebookPen,
    Languages,
    DatabaseZap,
    BrickWallFire,
    Cpu,
    Brain,
    NotebookPen,
    Languages,
    DatabaseZap,
    BrickWallFire,
    Cpu,
    Brain,
    NotebookPen,
    Languages,
    DatabaseZap,
    BrickWallFire,
]


function Antigravity() {

    gsap.registerPlugin(useGSAP)

    useGSAP(() => {
        gsap.to(".icons", {
            y: "-=20",
            duration: 1,
            repeat: -1,
            yoyo: true,
            stagger: 0.1
        })
    })


    return (
        <div className='w-full h-screen overflow-x-hidden'>
            <ul className='flex w-full h-full items-center justify-center gap-x-4'>
                {
                    ICONS.map((Icon, index) => (
                        <li
                            className='icons p-7 bg-gray-100/40 border border-black/20 rounded-full'
                            key={index}>
                            <Icon size={38} stroke-width={1} />
                        </li>
                    ))
                }
            </ul>


        </div>
    )
}

export default Antigravity