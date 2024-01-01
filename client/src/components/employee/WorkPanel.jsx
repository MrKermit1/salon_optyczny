import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


function WorkPanel () {

    const [name, setName] = useState();
    const [secname, setSecname] = useState();
    const [email, setEmail] = useState();
    const [id, setId] = useState();
    const [status, setStatus] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('em_status')) {
            setName(localStorage.getItem('em_imie'))
            setSecname(localStorage.getItem('em_nazwisko'))
            setStatus(localStorage.getItem('em_status'))
            setEmail(localStorage.getItem('em_email'))
            setId(localStorage.getItem('em_id'))
        }else{
            navigate('/');
        }
        
    }, [])                                           
    
    
    return (
        <>
            <div id="left" className=" w-1/4 bg-gray-300 h-screen float-left">
                <ul className="text-center">
                    <li>
                        <a href="/orders">Realizuj zamówienia</a>
                        
                        </li>
                    <li>Zrealizowane zamówienia</li>
                    <li>Dodaj produkt</li>
                </ul>
            </div>

            <div id="center" className=" w-3/4 h-screen float-left">
                <p className=" text-center">Dane pracownika: </p>
                <p className=" text-center">Imie: {name}</p>
                <p className=" text-center">Nazwisko: {secname}</p>
                <p className=" text-center">Email: {email}</p>
            </div>
        </>
    )
}export default WorkPanel;