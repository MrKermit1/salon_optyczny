import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";

function AddCash() {

    const navigate = useNavigate();

    const [name, setName] = useState('');

    const [surname, setSurname] = useState('');

    const [cardNumber, setCardNumber] = useState(0);

    const [money, setMoney] = useState(0);

    const [email, setEmail] = useState('');
    
    const [security, setSecurity] = useState(0)
    const [securityMsg, setSecurityMsg] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {

        console.log(localStorage.getItem('userEmail'))

        const storedStatus = localStorage.getItem('logStatus')
        if (!storedStatus) {
            navigate('/login')
        }else{
            setEmail(localStorage.getItem('userEmail'))
        }

    }, [])


    const addMoney = () => {

        let cashToSend = parseInt(localStorage.getItem('userPortfel')) + parseInt(money)
        localStorage.setItem('userPortfel', cashToSend)

        if (name === '' || surname === '' || money == 0 || cardNumber == 0 || security == 0) {
            setMessage('Wprowadzono nie poprawne dane')
        }else{
            Axios.post('http://localhost:3001/addCash', {
                name: name,
                surname: surname,
                money: cashToSend,
                email: email
            }).then((response) => {
                setMessage('')
                navigate('/statement', {state: "Dodano środki do konta. Wyloguj się i zaloguj ponownie aby zaaktualizować stan aplikacji"})
            }).catch((err) => {
                setMessage('Dodawanie środków nie powiodło się. Upewnij się ,że wprowadzone dane są poprawne')
                console.log(err)
            })   
        }

        

    }

    return (
        <>
            <div class="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16">
                <div class="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700" >
                    <div class="mb-10">
                        <h1 class="text-center font-bold text-xl uppercase">Doładuj konto</h1>
                    </div>
                    <div class="mb-3 flex -mx-2">
                        <div class="px-2">
                            <label for="type1" class="flex items-center cursor-pointer">
                                <input type="radio" class="form-radio h-5 w-5 text-zinc-800" name="type" id="type1"  />
                                <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" class="h-8 ml-3" />
                            </label>
                        </div>
                        <div class="px-2">
                            <label for="type2" class="flex items-center cursor-pointer">
                                <input type="radio" class="form-radio h-5 w-5 text-indigo-500" name="type" id="type2" />
                                <img src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png" class="h-8 ml-3" />
                            </label>
                        </div>
                        </div>
                            <div class="mb-3">
                                <label class="font-bold text-sm mb-2 ml-1">Imię</label>
                                <div>
                                    <input class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Jan" type="text"
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="font-bold text-sm mb-2 ml-1">Nazwisko</label>
                                <div>
                                    <input class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Kowalski" type="text"
                                        onChange={(e) => setSurname(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="font-bold text-sm mb-2 ml-1">Numer karty</label>
                                <div>
                                    <input class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="0000 0000 0000 0000" type="number"
                                        onChange={(e) => setCardNumber(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div class="mb-3">
                                <label class="font-bold text-sm mb-2 ml-1">Ilość w złotówkach</label>
                                <div>
                                    <input class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="100" type="number"
                                        onChange={(e) => setMoney(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div class="mb-3 -mx-2 flex items-end">
                                <div class="px-2 w-1/2">
                                    <label class="font-bold text-sm mb-2 ml-1">Data ważności</label>
                                <div>
                                <select class="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                                    <option value="01">01 - January</option>
                                    <option value="02">02 - February</option>
                                    <option value="03">03 - March</option>
                                    <option value="04">04 - April</option>
                                    <option value="05">05 - May</option>
                                    <option value="06">06 - June</option>
                                    <option value="07">07 - July</option>
                                    <option value="08">08 - August</option>
                                    <option value="09">09 - September</option>
                                    <option value="10">10 - October</option>
                                    <option value="11">11 - November</option>
                                    <option value="12">12 - December</option>
                                </select>
                            </div>
                        </div>
                        <div class="px-2 w-1/2">
                            <select class="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                                <option value="2027">2027</option>
                                <option value="2028">2028</option>
                                <option value="2029">2029</option>
                            </select>
                        </div>
                    </div>
                    <div class="mb-10">
                        <p className=" text-red-600">{message}</p>
                        <label class="font-bold text-sm mb-2 ml-1">Kod bezpieczeństwa</label>
                        <div>
                            <input class="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="000" type="number"
                                onChange={(e) => setSecurity(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <button 
                        onClick={addMoney}
                        class="block w-full max-w-xs mx-auto bg-zinc-800 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"><i class="mdi mdi-lock-outline mr-1"></i> PAY NOW</button>
                    </div>
                </div>
            </div>
            
        </>
    )
}export default AddCash