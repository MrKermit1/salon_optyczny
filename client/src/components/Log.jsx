import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import './Content.css'

//formularz logowania
function Login () {
    //stan emaila
    const [email, setEmail] = useState('');
    //stan hasła
    const [password, setPassword] = useState('');
    //stan ostrzeżeń dot. logowania
    const [logErr, setLogErr] = useState('');
    const navigate = useNavigate();

    //logowanie usera
    const login = () => {
        //usuwa wszystkie dane z sesji 
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userId');
        localStorage.removeItem('userPortfel');
        localStorage.removeItem('userLog');
        //wysyla requesta
        Axios.post('http://localhost:3001/log', {
            email: email,
            password: password
        }).then((response) => {
            console.log("zalogowano");  
            setLogErr('');
            Axios.post('http://localhost:3001/getUser',
                {email: email}
            ).then((response) => {
                //jezeli wszytstko poszło pomyyślnie, ustawia zmmienne w sesji
                localStorage.setItem('userEmail' ,response.data.email)
                localStorage.setItem('userId' ,response.data.id)
                localStorage.setItem('userPortfel' ,response.data.portfel)
                localStorage.setItem('logStatus', true);
                //UserInfo.setEmail(response.data.email);
                //UserInfo.setId(response.data.id);
            }).catch((error) => { // w razie errorów, wypisze je w konsoli
                console.log(error)
            })  
            navigate('/shop', {state: email});
        }).catch((error) => { 
            console.log(error)
            console.log("Podany email lub hasło nie są poprawne");
            setLogErr("Podany email lub hasło nie są poprawne");
        })

    }

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
                                    Zaloguj
                                </h1>
                                <form class="space-y-4 md:space-y-6" action="#">
                                    <div>
                                    <p className="text-red-500" id="error">{logErr}</p>
                                        
                                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" 
                                        onChange={e => setEmail(e.target.value)}
                                        
                                        required /> 
                                    </div>
                                    <div>
                                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hasło</label>
                                        <input type="password" name="password" id="password" placeholder="••••••••" class="bg-zinc-500 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                        onChange={e => setPassword(e.target.value)}
                                        required/>
                                    </div>
                                    <button 
                                    type="button" 
                                    onClick={login}
                                    class="w-full text-white bg-zinc-800 hover:bg-zinc-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                    Zaloguj</button>
                                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Nie założyłeś jeszcze konta? <a href="/register" class="font-medium text-zinc-600 hover:underline dark:text-zinc-500">Zarejestruj</a>
                                    </p>
                                    
                                    <p class="text-sm font-light text-gray-800 dark:text-gray-400">
                                        Jesteś pracownikiem? <a href="/login_employee" class="font-medium text-zinc-800 hover:underline dark:text-zinc-500">Zkorzystaj z panelu pracowniczego</a>
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
}export default Login;