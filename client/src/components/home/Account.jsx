import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import UserInfo from "./UserInfo";

function Account () {
    //stan emaila
    const [email, setEmail] = useState('');
    //stan id
    const [id, setId] = useState();
    //stan portfela
    const [portfel, setPortfel] = useState();
    const [logStatus, setLogStatus] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        
        
        //przechwytuje dane z sesji
        const storedEmail = localStorage.getItem('userEmail');
        const storedId = localStorage.getItem('userId')
        const storedPortfel = localStorage.getItem('userPortfel')
        const storedStatus = localStorage.getItem('logStatus');
        //jezeli dane z sesji istnieją ustawia stany
        if (storedEmail && storedId && storedPortfel && storedStatus) {
            setEmail(storedEmail);
            setId(storedId);
            setPortfel(storedPortfel);
            setLogStatus(storedStatus);

        } else {// w przeciwnym wypadku odsyła do strony logowania
            navigate('/login')
        }
    }, [])
    
    //wylogowanie
    const logout = () => {
        //usuwa dane z sesji
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userId');
        localStorage.removeItem('userPortfel');
        localStorage.removeItem('logStatus');
        //nawiguje do strony głównej
        navigate('/');
    };


    return  (
        <>
            <div class="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg flex flex-col justify-center align-middle">
                <div class="px-4 py-5 sm:px-6">
                    <p class="mt-1 max-w-2xl text-sm text-gray-500">
                        Informacje Użytkownika
                    </p>
                </div>
                
                <div class="border-t border-gray-200 ">
                    <dl>
                        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Email address
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {email}
                            </dd>
                        </div>
                        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Środki na koncie aplikacji
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {portfel}
                            </dd>
                        </div>

                       

                        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Id
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {id}
                            </dd>
                            <button
                                    onClick={logout}
                                >Wyloguj</button>
                            
                        </div>
                    </dl>



                </div>
            </div>
        </>
    )
}export default Account
