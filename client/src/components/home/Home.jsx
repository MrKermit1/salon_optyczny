import React from 'react';
import Nav from '../Navbar';
import Panel from './Panel';
import { useLocation } from 'react-router-dom';
import Footer from '../Footer';
import { useState } from 'react';
import { useEffect } from 'react';
import Axios from 'axios';

function Home () {
    const location = useLocation();
    const data = location.state;
    //const email = location.state?.user?.email || '';
    const [userEmail, setUserEmail] = useState(null);
    const [userId, setUserId] = useState(null);
    const [userPortfel, setUserPortfel] = useState(null)
    const [userLog, setUserLog] = useState('false');

    useEffect(() => {
        //przechowywane dane
        const storedUserEmail = localStorage.getItem('userEmail');
        const storedUserId = localStorage.getItem('userId');
        const storedUserPortfel = localStorage.getItem('userPortfel');
        const storedLogStatus = localStorage.getItem('userLog');
        //jezeli są ustawione dane z sesji to dane są przypisywane lokalnie w komponencie
        if (storedUserEmail && storedUserId && storedUserPortfel) {
          //ustawienie stanów
          setUserEmail(storedUserEmail);
          setUserId(storedUserId);
          setUserPortfel(storedUserPortfel);
          setUserLog(true);
        } else {//jeżeli nie to dane są przechwytywane z bazy
          if (data) {
            getUserData();
          }
        }
      }, [data]);

    const getUserData = () => {
        Axios.post('http://localhost:3001/getUser',
            {email: data}
        ).then((response) => {
            console.log("Wczytano");
            //ustawia dane w tym konkretnym komponencie
            setUserEmail(response.data.email)
            setUserId(response.data.id)
            setUserPortfel(response.data.portfel)
        }).catch((error) => { 
            console.log(error)
            console.log("ups");
        })  
    }


    return(
        <>
            <Nav email={userEmail} status={userLog}/>
            <Panel></Panel>
            <Footer></Footer>
        </>
    )
}export default Home