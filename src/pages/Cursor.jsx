import Dropdown from '../components/Dropdown'
import Empty from '../components/Empty'
import Simple from '../components/Simple'
import Talking from '../components/Talking'
import Trail from '../components/Trail'
import Card from '../components/Card'
import Cube from '../components/Cube'
import FolderIcon from '../components/FolderIcon'
import Radar from '../components/Radar'
import Stack from '../components/Stack'

const designs = [
    { component: Simple, githubUrl: 'https://github.com/you/repo/blob/main/Simple.tsx' },
    { component: Trail, githubUrl: 'https://github.com/you/repo/blob/main/Trail.tsx' },
    { component: Talking, githubUrl: 'https://github.com/you/repo/blob/main/Talking.tsx' },
    { component: Dropdown, githubUrl: 'https://github.com/you/repo/blob/main/Dropdown.tsx' },
    { component: FolderIcon, githubUrl: 'https://github.com/you/repo/blob/main/FolderIcon.tsx' },
    { component: Stack, githubUrl: 'https://github.com/you/repo/blob/main/Stack.tsx' },
    // { component: Card, githubUrl: '...' },
    { component: Radar, githubUrl: 'https://github.com/you/repo/blob/main/Radar.tsx' },
    { component: Cube, githubUrl: 'https://github.com/you/repo/blob/main/Cube.tsx' },
    { component: Empty, githubUrl: null },
    { component: Empty, githubUrl: null },
]

function Cursor() {
    return (
        <div className='bg-[#1c1b1b] pb-[150px]'>
            <h2 className='border-b border-white/60 text-white/90 font-serif uppercase text-3xl py-6 text-center'>my Designs</h2>
            <div className='min-h-screen grid grid-cols-1 sm:grid-cols-6 grid-rows-[repeat(30,10rem)] divide-x divide-y divide-white/60'>
                {designs.map(({ component: Component, githubUrl }, i) => (
                    <Component key={i} githubUrl={githubUrl} />
                ))}
            </div>
        </div>
    )
}

export default Cursor