import { useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Axios from 'axios';

//formularz zamówienia
function Order () {
    const location = useLocation();
    const navigate = useNavigate();

    //stan daty zamówienia
    const [date, setDate] = useState();
    //stan nazwy produktu
    const [nazwa, setNazwa] = useState(); 
    //stan statusu zamówienia
    const [status, setStatus] = useState('w trakcie realizacji');
    //stan id produktu
    const [idProduktu, setidProduktu] = useState(); 
    //stan email zamawiającego
    const [email, setEmail] = useState();
    //const [adres, setAdres] = useState();
    //stan id salonu do którego oprawki mają być wysłane
    const [idSalonu, setidSalonu] = useState();
    //obiekt obecnej daty
    const today = new Date();
    useEffect(() => {
        //jezeli user nie jest zalogowany, formularz zamówienia jest nie dostępny i odsyła do strony z produktami
        if (!localStorage.getItem('logStatus')) {
            navigate('/shop')
        }else{
            //obecny miesiac
            const month = today.getMonth()+1;
            //obecny rok
            const year = today.getFullYear();
            //obecny dzien
            const day = today.getDate();
            //cala data w formie Stringa
            const currentDate = year + "." + month + "." + day;
            //ustawia stan daty
            setDate(currentDate)
            //ustawia stan id produktu
            setidProduktu(location.state.id)
            //ustawia stan nazwy produktu
            setNazwa(location.state.nazwa)
            //ustawia stan emaila
            setEmail(location.state.email)
        }
    }, [])

    //wysyła requsta dodając zamówienie do bazy
    const createOrder = () => {
        Axios.post('http://localhost:3001/createOrder', {
            nazwa: nazwa,
            email: email,
            data: date,
            status: status,
            id_salonu: idSalonu,
            id_produktu: idProduktu
        }).then((response) => {
             
        })
    }
    return (
        <>
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <div id="coKupujesz">
                    <p>Kupujesz: {location.state.nazwa}</p>
                    <img src={location.state.img} alt="" width="100"/>
                </div>
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Wypełnij dane
                </h1>
                <form class="space-y-4 md:space-y-6" action="#">
                
                   
                    <div>
                        <label for="id_salonu" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Numer salonu</label>
                        <input type="number" name="id_salonu" id="id_salonu" placeholder="numer salonu do którego chcesz zamówić" class="    border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        onChange={e => setidSalonu(e.target.value)}
                        required/>
                    </div>
                    <button 
                    type="button" 
                    onClick={createOrder}
                    class="w-full text-white bg-zinc-800 hover:bg-zinc-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    Złóż zamówienie</button>
                </form>
            </div>
        </>
    )
}export default Order