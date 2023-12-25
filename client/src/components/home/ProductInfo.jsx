import obrazek from '../../assets/okulary/obrazek1.jpg'
import { useLocation } from 'react-router-dom'

function ProductInfo (props) {

    const location = useLocation();
    console.log(location.state)

    return (
        
        <div className=' min-h-screen flex items-center flex-row justify-evenly'>
            
            <div className=''>
                <img src={location.state.img} alt="" width="500" className='rounded-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300'/>
            </div>
            <div>
                <p>{location.state.nazwa} <br /><br /></p>
                <p>Dolor Sit amet czy inne tam gówno po łacinie<br /><br /></p>
                <p className='text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300'>
                    <p className=' text-center'>{location.state.cena}</p>
                    <button className='text-center border-solid border-2 text-white bg-zinc-800 w-44 rounded-2xl '>Kup</button><br/>
                    <a href="/home" className='text-center'>Powrót do strony głównej</a>
                    

                </p>
                
            </div>
        </div>
    )
}export default ProductInfo 