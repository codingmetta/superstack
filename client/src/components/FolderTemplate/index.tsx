import './index.css'

function FolderTemplate({ children }) {
    return (
        <div className='py-6 pl-6 pr-4 border border-black custom-about-super-vision-folder bg-mint'>
            <div className='custom-about-super-vision-folder-2'>
            </div>
            <p className='text-md font-climate'>
                {children}
            </p>
        </div>
    )
}

export default FolderTemplate