import { Routes, Route } from 'react-router-dom';
import Main from './Main.jsx';
import Login from './Log.jsx';
import Register from './Register.jsx';
import Home from './home/Home.jsx'
import Account from './home/Account.jsx';
import ProductInfo from './home/ProductInfo.jsx';
import EmLog from './EmLog.jsx';
import WorkPanel from './employee/WorkPanel.jsx';
import Order from './home/Order.jsx';
import Orders from './employee/Orders.jsx';
export default function App() {
  
  return (
    <>
      <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>}/>
          <Route path='/shop' element={<Home />} />
          <Route path='/acc' element={<Account />}/>
          <Route path='/product' element={<ProductInfo />}/>
          <Route path='/login_employee' element={<EmLog />}/>
          <Route path='/work_panel' element={<WorkPanel />}/>
          <Route path='/order' element={<Order />}/>
          <Route path='/orders' element={<Orders />}/>
      </Routes>
    </>
  );
}
