import Cube from '../components/icons/Cube'
import FolderIcon from '../components/icons/FolderIcon'
import Stack from '../components/icons/Stack'

function Icons() {
    return (
        <div className='p-20 grid grid-cols-3 gap-4'>
            <FolderIcon />
            <Stack />
            <Cube />
        </div>
    )
}

export default Icons