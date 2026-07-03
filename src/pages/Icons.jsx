import Card from '../components/icons/Card'
import Cube from '../components/icons/Cube'
import FolderIcon from '../components/icons/FolderIcon'
import Stack from '../components/icons/Stack'

function Icons() {
    return (
        <div className='bg-[#282828] min-h-screen w-full py-5 px-5'>
            <div className='grid grid-cols-4 min-h-screen w-full'>
                <FolderIcon />
                <Stack />
                <Cube />
                <Card />
            </div>
        </div>
    )
}

export default Icons