import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

//strona glowna panelu pracowniczego, zawiera dane pracownika
function WorkPanel () {

    //stan imienia
    const [name, setName] = useState();
    //stan nazwiska
    const [secname, setSecname] = useState();
    //stan emaila
    const [email, setEmail] = useState();
    //stan id
    //const [id, setId] = useState();
    //stan statusu
    const [status, setStatus] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        //jezeli pracownik jest zalogowany to ustawia dane do stanów
        if (localStorage.getItem('em_status')) {
            setName(localStorage.getItem('em_imie'))
            setSecname(localStorage.getItem('em_nazwisko'))
            setStatus(localStorage.getItem('em_status'))
            setEmail(localStorage.getItem('em_email'))
            setId(localStorage.getItem('em_id'))
        }else{//w przeciwnym wypadku odsyła na stronę główną
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