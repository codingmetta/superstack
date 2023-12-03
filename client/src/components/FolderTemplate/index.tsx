import './index.css'

function FolderTemplate({ children }) {
    return (
        <div className='py-6 pl-6 pr-4 border border-black custom-about-super-vision-folder bg-mint'>
            <div className='custom-about-super-vision-folder-2'>
            </div>
            {children}
        </div>
    )
}

export default FolderTemplate