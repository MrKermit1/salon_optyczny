import img from '../../public/ta.jpg'
import { Navigate } from 'react-router-dom';
function Wrong() {
    return (
        <>  
            <Navigate to={{pathname: '/404'}} />
            <p>Niestety ta strona nie istnieje</p>
            <p>Ale za to istnieje to piękne dzieło Polskiej Literatury współczesnej</p>
            <img src={img} alt="korwin"  className=' text-center'/>
        </>
    )
}export default Wrong