import PropTypes  from "prop-types"
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import UserInfo from "./UserInfo";

function Account () {

    const [email, setEmail] = useState('');
    const [id, setId] = useState();
    const [portfel, setPortfel] = useState();
    const [status, setStatus] = useState();

    const navigate = useNavigate();
    useEffect(() => {
        const storedEmail = localStorage.getItem('userEmail');
        const storedId = localStorage.getItem('userId')
        const storedPortfel = localStorage.getItem('userPortfel')
        const storedStatus = localStorage.getItem('userLog');

        if (storedEmail && storedId && storedPortfel) {
            setEmail(storedEmail);
            setId(storedId);
            setPortfel(storedPortfel);

        } else {
            const userEmail = UserInfo.getEmail();
            const userId = UserInfo.getId();
            const userPortfel = UserInfo.getPortfel();
            const userStatus = UserInfo.getIsLog();

            setId(userId);
            setEmail(userEmail);
            setPortfel(userPortfel);
            setStatus(userStatus);
            if (userStatus == false) {
                navigate('/login');
            }

            localStorage.setItem('userEmail', userEmail);
            localStorage.setItem('userId', userId);
            localStorage.setItem('userPortfel', userPortfel);
            localStorage.setItem('userLog', true);
        }
    })

    const logout = () => {
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userId');
        localStorage.removeItem('userPortfel');
        navigate('/login');
    };


    return  (
        <>
            <div class="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg flex flex-col justify-center">
                <div class="px-4 py-5 sm:px-6">
                    <p class="mt-1 max-w-2xl text-sm text-gray-500">
                        Informacje Użytkownika
                    </p>
                </div>
                
                <div class="border-t border-gray-200">
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

                        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Status logowania
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {status == true ? "true" : "false"}
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
