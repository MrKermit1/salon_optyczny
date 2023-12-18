import React from 'react';
import Nav from '../Navbar';
import Panel from './Panel';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import UserInfo from './UserInfo';
import Axios from 'axios';
import { User } from '@nextui-org/react';

function Home () {
    const location = useLocation();
    const email = location.state;
    //const email = location.state?.user?.email || '';
    const [userData, setUserData] = useState(null);
    const [userId, setUserId] = useState(null);
    const [userPortfel, setUserPortfel] = useState(null)
    const [userLog, setUserLog] = useState('false');

    useEffect(() => {
        const storedUserData = JSON.parse(localStorage.getItem('userData'));
        const storedUserId = JSON.parse(localStorage.getItem('userId'));
        const storedUserPortfel = JSON.parse(localStorage.getItem('userPortfel'));
        const storedLogStatus = localStorage.getItem('userLog');
        console.log(storedLogStatus);
        if (storedUserData && storedUserId && storedUserPortfel) {
          setUserData(storedUserData);
          setUserId(storedUserId);
          storedUserData(storedUserPortfel);
          setUserLog(true);
        } else {
          if (email) {
            getUserData();
          }
        }
      }, [email]);

    const getUserData = () => {
        console.log('dupa')
        Axios.post('http://localhost:3001/getUser',
            {email: email}
        ).then((response) => {
            console.log("Wczytano");
            //console.log(response.data)
            setUserData(response.data.email)
            UserInfo.setEmail(response.data.email);
            UserInfo.setId(response.data.id);
            UserInfo.setPortfel(response.data.portfel)
            UserInfo.setIsLog(true);
        }).catch((error) => { 
            console.log(error)
            console.log("ups");
        })  
    }

    return(
        <>
            <Nav email={userData}/>
            <Panel></Panel>
        </>
    )
}export default Home