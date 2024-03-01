import rightArrow from '../assets/shared/desktop/icon-arrow-right.svg'

const TopbarMenuItems = (props) =>{
    const {img,title} = props
    return(
        <div className='bg-primary-grey rounded-lg my-24 text-center pt-20 pb-6 lg:pt-24 lg:pb-8 relative md:w-full'>
            <img className='w-48 h-auto absolute -top-1/2 start-1/2 -translate-x-1/2' src={img} alt={img} />
            
            <p className='uppercase lg:text-lg font-bold mb-4 tracking-wider'>{title}</p>
            <div className='flex justify-center items-center gap-3'>
                <p className='uppercase font-medium text-cloud-grey'>shop</p>
                <img src={rightArrow} alt="Arrow" />
            </div>
        </div>
    )
}
export default TopbarMenuItems