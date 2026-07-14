import Dropdown from '../components/cursor/Dropdown'
import Empty from '../components/cursor/Empty'
import Simple from '../components/cursor/Simple'
import Talking from '../components/cursor/Talking'
import Trail from '../components/cursor/Trail'

function Cursor() {

    return (
        <div className='min-h-screen grid grid-cols-6 grid-rows-[repeat(4,10rem)] divide-x divide-y divide-white/60 bg-[#1c1b1b]'>
            <Simple />
            <Trail />
            <Talking />
            <Dropdown />
            <Empty />
            <Empty />
        </div>
    )
}

export default Cursor