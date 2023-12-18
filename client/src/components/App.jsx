import { Routes, Route } from 'react-router-dom';
import Main from './Main.jsx';
import Login from './Log.jsx';
import Register from './Register.jsx';
import Home from './home/Home.jsx'
import Account from './home/Account.jsx';
export default function App() {
  
  return (
    <>
      <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>}/>
          <Route path='/home' element={<Home />} />
          <Route path='/acc' element={<Account />}/>
      </Routes>
    </>
  );
}
