import Empty from '../components/cursor/Empty'
import Simple from '../components/cursor/Simple'
import Trail from '../components/cursor/Trail'

function Cursor() {

    return (
        <div className='min-h-screen grid grid-cols-3 grid-rows-[repeat(4,20rem)] divide-x divide-y divide-white/60 bg-[#1c1b1b]'>
            <Simple />
            <Trail />
            <Empty />
        </div>
    )
}

export default Cursor