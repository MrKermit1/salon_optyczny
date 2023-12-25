import obrazek from '../../assets/okulary/obrazek1.jpg'

function ProductInfo (props) {

    return (
        <div className=' min-h-screen flex items-center flex-row justify-evenly'>
            <div className=''>
                <img src={props.image != null ? props.image : obrazek} alt="" width="500" className='rounded-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300'/>
            </div>
            <div>
                <p>Lorem ipsum. Dolor <br /><br /></p>
                <p>Dolor Sit amet czy inne tam gówno po łacinie<br /><br /></p>
                <p className='text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300'>
                    <p className=' text-center'>120.99</p>
                    <button className='text-center border-solid border-2 text-white bg-zinc-800 w-44 rounded-2xl '>Kup</button>
                   
                </p>
                
            </div>
        </div>
    )
}export default ProductInfo 