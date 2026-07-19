import Dropdown from '../components/cursor/Dropdown'
import Empty from '../components/cursor/Empty'
import Simple from '../components/cursor/Simple'
import Talking from '../components/cursor/Talking'
import Trail from '../components/cursor/Trail'
import Card from '../components/icons/Card'
import Cube from '../components/icons/Cube'
import FolderIcon from '../components/icons/FolderIcon'
import Radar from '../components/icons/Radar'
import Stack from '../components/icons/Stack'

function Cursor() {

    return (
        <div className='bg-[#1c1b1b] pb-[150px]'>
            <div className='min-h-screen grid grid-cols-6 grid-rows-[repeat(30,10rem)] divide-x divide-y divide-white/60'>
                <Simple />
                <Trail />
                <Talking />
                <Dropdown />
                <FolderIcon />
                <Stack /> 
                {/* <Card /> */}
                <Radar />
                <Cube />
                <Empty />
                <Empty />
            </div>
        </div>
    )
}

export default Cursor