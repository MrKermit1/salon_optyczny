import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import './Content.css'

function EmLog () {//logowanie pracownika
    //stan kodu dostępu
    const [kod, setKod] = useState('');
    const navigate = useNavigate();
    Axios.post('http://localhost:3001/emLog', {
        kod: kod
    }).then((response) => {
        localStorage.setItem('em_email', response.data.email)
        localStorage.setItem('em_id', response.data.id)
        localStorage.setItem('em_imie', response.data.imie)
        localStorage.setItem('em_nazwisko', response.data.nazwisko)
        localStorage.setItem('em_status', true)
        //nawiguj
        navigate('/work_panel');
    }).catch((error) => {
        console.log(error)
    })

    

    return (
        <>
            <Navbar />
            <div className='bg-[url(src/assets/background.jpeg)]' id='content' >
                <section id="content">
                    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <a href="/" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                            Salon Optyczny<br/>
                        </a>
                        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Wpisz swój kod
                                </h1>
                                <form class="space-y-4 md:space-y-6" action="#">
                                    <div>
                                    
                                        
                                        <label for="kod" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Twój kod</label>
                                        <input type="number" name="kod" id="kod" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                        onChange={e => setKod(e.target.value)}
                                        
                                        required /> 
                                    </div>
                                   
                                    <p class="text-sm font-light text-gray-800 dark:text-gray-400">
                                        Nie jesteś pracownikiem lub właścicielem? <a href="/login" class="font-medium text-zinc-800 hover:underline dark:text-zinc-500">Zkorzystaj z panelu dla klientów</a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}export default EmLog