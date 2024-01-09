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
    //stan powiadomień
    const [message, setMessage] = useState('');
    //stan ceny
    const [cena, setCena] = useState();
    //stan nowego stanu konta
    const [nowyPortfel, setNowyPortfel] = useState()
    //obiekt obecnej daty
    const today = new Date();

    const [idUsera, setIdUsera] = useState();
    useEffect(() => {
        //jezeli user nie jest zalogowany, formularz zamówienia jest nie dostępny i odsyła do strony z produktami
        if (!localStorage.getItem('logStatus')) {
            navigate('/login')
        }else{
            //obecny miesiac
            let month = today.getMonth()+1;
            if (month < 10) {
                month = "0" + month
            }
            //obecny rok
            let year = today.getFullYear();
            //obecny dzien
            let day = today.getDate();
            if (day < 10) {
                day = "0" + day
            }
            //cala data w formie Stringa
            const currentDate = year + "-" + month + "-" + day;
            //ustawia stan daty
            setDate(currentDate)
            //ustawia stan id produktu
            setidProduktu(location.state.id)
            //ustawia stan nazwy produktu
            setNazwa(location.state.nazwa)
            //ustawia stan emaila
            setEmail(location.state.email)
            //ustawia stan id usera
            setIdUsera(localStorage.getItem('userId'))
            //ustawia stan ceny
            setCena(location.state.cena)
            //ustawia stan nowego stanu konta
            setNowyPortfel(parseInt(localStorage.getItem('userPortfel')) - parseInt(location.state.cena))
            
        }
    }, [])

    //wysyła requsta dodając zamówienie do bazy
    const createOrder = () => {

        if (nowyPortfel < 0) {
            console.log('biedak')
            setMessage('Nie masz wystarczająco środków na koncie')
        }else{
            Axios.post('http://localhost:3001/createOrder', {
                        nazwa: nazwa,
                        email: email,
                        data: date,
                        status: status,
                        id_salonu: idSalonu,
                        id_produktu: idProduktu,
                        id_usera: idUsera
                    }).then((response) => { 
                        console.log(nowyPortfel);
                        localStorage.setItem('userPortfel', nowyPortfel)
                        Axios.post('http://localhost:3001/cash ', {
                            email: email,
                            cash: nowyPortfel
                        }).then((response) => {
                            localStorage.setItem('transactionStatus', true);
                            navigate('/statement', {state: "Twoje zamówienie zostało złożone"})
                        }).catch((error) => {
                            console.log(error);
                            setMessage('Transkakcja nie doszła do skutku.');
                        })
                    }).catch((error) => {
                        console.log(error);
                        setMessage('Transkakcja nie doszła do skutku. Upewnij się, że numer salonu jest poprawny.');
                    })            
        }


        
    }
    return (
        <>
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <div id="coKupujesz">
                    <p>Kupujesz: </p>
                    <p>{nazwa}</p>
                    <p>Cena: {cena}</p>
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
                    <a href="/shop" className='text-center'>Powrót do strony głównej</a>
                </form>
                <p className=' text-center text-red-600'>{message}</p>
            </div>
        </>
    )
}export default Order