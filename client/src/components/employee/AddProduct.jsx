import Axios from "axios"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Aside from "./Aside"
function AddProduct() {
    
    const navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem('em_status')){
            navigate('/login')
        }
    })

    const [name, setName] = useState('')
    const [price, setPrice] = useState(null)
    const [describe, setDescribe] = useState('')
    const [message, setMessage] = useState()
    const [message2, setMessage2] = useState()

    const add = () => {

        if (name === '' || price === null || describe === '') {
            setMessage('')
            setMessage('Wprowadzono nie poprawne dane')
        }else{
            Axios.post('http://localhost:3001/addProduct', {
            nazwa: name,
            cena: price, 
            opis: describe
            }).then((response) => {
                setMessage('')
                setMessage2('Dodano produkt')
            })
        }

       
    }
    return (
        <>  
                <Aside/>
                <section id="content">
                    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <a href="/" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                            Dodawanie Produktu<br/>
                        </a>
                        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <form class="space-y-4 md:space-y-6" action="#">
                                    <div>
                                    
                                        
                                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nazwa produktu</label>
                                        <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                        onChange={(e) => setName(e.target.value)}
                                        required /> 

                                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cena produktu</label>
                                        <input type="number" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                        onChange={(e) => setPrice(e.target.value)}
                                        required /> 

                                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nazwa produktu</label>
                                        <textarea type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                        onChange={(e) => setDescribe(e.target.value)}
                                        required /> 

                                    <button type="button" class="w-full text-white bg-zinc-800 hover:bg-zinc-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mt-2"
                                        onClick={add}
                                    >
                                        Dodaj produkt
                                    </button>
                                    <p className=" text-center text-red-600">{message}</p>
                                    <p className=" text-center text-green-600">{message2}</p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
        </>
    )
}export default AddProduct