import { Navigate, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Nav from '../Navbar';
import  {Link} from 'react-router-dom';
function ProductInfo (props) {

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.state)

    const goToOrder = () => {
        navigate('/order',
            {
                replace: true,
                state: {
                    nazwa: location.state.nazwa,
                    cena: location.state.cena, 
                    email: localStorage.getItem('userEmail'),
                    id: location.state.id,
                    img: location.state.img
                }
            }
        )
    }

    return (
        <>
            <Nav></Nav>
            <div className=' min-h-screen flex items-center flex-col lg:flex-row justify-evenly'>
               
               <div className=''>
                   <img src={location.state.img} alt="" width="500" className='rounded-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300'/>
               </div>
               <div>
                   <p>{location.state.nazwa} <br /><br /></p>
                   <p>{location.state.opis}<br /><br /></p>
                   
                   <p className='text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300'>
                       <p className=' text-center'>{location.state.cena}</p>
                       {
                        console.log("przed: ", location.state)
                       }
                        <button 
                            className='text-center border-solid border-2 text-white bg-zinc-800 w-44 rounded-2xl '
                            onClick={goToOrder}
                        >
                            Kup
                        </button>
                        <br/>
                       <a href="/shop" className='text-center'>Powrót do strony głównej</a>
                       

                   </p>
                   
               </div>
            </div>
        </>
       
    )
}export default ProductInfo 