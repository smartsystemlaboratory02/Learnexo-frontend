import avatar from '../../../assets/images/avatar.png'

const ImagePlaceholder = () => {
    return (
        <div className='bg-gray-2/20 rounded-full flex items-center justify-center w-[100px] h-[100px] flex-col border-1 border-black-1/50 cursor-pointer'>
            <div>
                <img src={avatar} alt="Upload photo" />
            </div>
            <p className='text-[10px] text-blue-5 font-medium'>Upload Photo</p>
        </div>
    )
}

export default ImagePlaceholder