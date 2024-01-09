import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Statement () {
    
    const [mess, setMess] = useState()
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <>
            <div id="mess">
                <p>{location.state}</p>
                <a href="/shop" className='text-center'>Powrót do sklepu</a>
            </div>
        </>
    )
}export default Statement