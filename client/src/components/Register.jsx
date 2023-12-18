import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import './Content.css'
import { useRef, useEffect } from "react";

function Register() {
    
    const userRef = useRef();
    const errRef = useRef();

    const emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    const passReg = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()-_+=])[\w!@#$%^&*()-_+=]{8,}$/;

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPass, setValidPass] = useState(false);
    const [passFocus, setPassFocus] = useState(false);

    const [matchPass, setMatchPass] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [password2, setPassword2] = useState('');
    const [validPass2, setValidPass2] = useState(false);
    const [passFocus2, setPassFocus2] = useState(false);

    const [errMsg,setErrMsg] = useState('');
    const [done, setDone] = useState(false);

    const [regErr, setRegErr] = useState('');

    //ustawia fokus na input kiedy komponent zostaje załadowny
    useEffect(()=>{
        userRef.current.focus()
    }, [])
    //walidacja emaila
    useEffect(()=>{
        const res = emailReg.test(email);
        console.log(res);
        console.log(email);
        setValidEmail(res);
    }, [email])

    
    useEffect(() => {
        const res = passReg.test(password);
        console.log(res);
        console.log(password);
        const match = password === matchPass;
        setValidPass(res);
    }, [password, matchPass])

    useEffect(() => {
        setErrMsg('')

    }, [email, password, matchPass])
    const navigate = useNavigate();
    const addUser = () => {
        
        if (validEmail && validPass && validPass) {
            
            Axios.post('http://localhost:3001/create', {
                email: email,
                password: password
            }).then((response) => {
                console.log("sukces")
                setRegErr('');
                navigate('/login');
            }).catch((error) => {
                console.log("Email istnieje");
                setRegErr("Email istnieje");
            })
        }
    }

    return (
       <>
        <Navbar />
            <div className='bg-gradient-to-r from-green-300 to-green-200 ' id='content' >
                <section class="bg-gradient-to-r from-green-300 to-green-200' id='content">
                    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                        <a href="/" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                            Salon Optyczny<br/>
                        </a>

                        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">

                                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Zarejestruj
                                </h1>

                                <form class="space-y-4 md:space-y-6" action="#">
                                    <div>
                                        <p className="text-red-500" id="error">{regErr}</p>


                                        <label htmlFor="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Email
                                        </label>
                                        <input 
                                        type="email" 
                                        name="email" 
                                        id="email" 
                                        ref={userRef}
                                        autoComplete="off"
                                        required
                                        aria-invalid={validEmail ? "false" : "true"}
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                        placeholder="name@company.com" 
                                        onChange={(e) => setEmail(e.target.value)}
                                        aria-describedby="uidnote"
                                        onFocus={() => setEmailFocus(true)}
                                        onBlur={() => setEmailFocus(false)}
                                        /> 
                                    </div>
                                    <p
                                    id="uidnote"
                                    className={emailFocus && email && !validEmail ? "text-red-500" : "hidden "}
                                    >Nieprawidłowy Email</p>
                                    <div>
                                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hasło</label>
                                        <input 
                                        type="password" 
                                        name="password" 
                                        id="password" 
                                        aria-invalid={validPass ? "false" : "true"}
                                        aria-describedby="pwdnote"
                                        onFocus={() => setPassFocus(true)}
                                        onBlur={() => setPassFocus(false)}
                                        autoComplete="off"
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••" 
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                        required />
                                    </div>
                                    <p
                                    id="pwdnote"
                                    className={passFocus && password && !validPass ? "text-red-500" : "hidden"}
                                    >Nieprawidłowe hasło.<br/>Hasło powinno zawierać  przy najmniej jedną dużą literę, jeden specjalny znak i jedną liczbę i nie może być krótszy niż 8 znaków</p>
                                    <div>
                                        <label for="password2" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Powtórz Hasło</label>
                                        <input 
                                        type="password" 
                                        name="password2" 
                                        id="password2" 
                                        aria-invalid={validPass2 ? "false" : "true"}
                                        aria-describedby="pwdnote2"
                                        onFocus={() => setPassFocus2(true)}
                                        onBlur={() => setPassFocus2(false)}
                                        autoComplete="off"
                                        onChange={(e) => setPassword2(e.target.value)}
                                        placeholder="••••••••" 
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                        required />
                                    </div>
                                    <p
                                    id="pwdnote2"
                                    className={password === password2 ? "hidden" : "text-red-500"}
                                    >Nieprawidłowe hasło.<br/>Hasła nie pasują do siebie</p>
                                    <div></div>
                                    <button 
                                    type="button" 
                                    class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    onClick={addUser}
                                    >Zarejestruj</button>

                                </form>

                                <p
                                    ref={errRef}
                                    aria-live="assertive"
                                    className={errMsg ? "offscreen": "hidden"}
                                >
                                    {errMsg}
                                </p>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
       </> 
    )
}export default Register;