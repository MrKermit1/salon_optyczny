import { Routes, Route } from 'react-router-dom';
import Main from './Main.jsx';
import Login from './Log.jsx';
import Register from './Register.jsx';
import Home from './home/Home.jsx'
import Account from './home/account/Account.jsx';
import ProductInfo from './home/ProductInfo.jsx';
import EmLog from './EmLog.jsx';
import WorkPanel from './employee/WorkPanel.jsx';
import Order from './home/Order.jsx';
import Orders from './employee/Orders.jsx';
import Statement from './home/Statement.jsx';
import Wrong from './Wrong.jsx';
import Regulamin from './Regulamin.jsx';
import AddCash from './home/account/AddCash.jsx';
import AddProduct from './employee/AddProduct.jsx';

//ustawia routy dla poszczególnych komponentów
export default function App() {
  
  return (
    <>
      <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>}/>
          <Route path='/shop' element={<Home />} />
          <Route path='/product' element={<ProductInfo />}/>
          <Route path='/acc' element={<Account />}/>
          <Route path='/login_employee' element={<EmLog />}/>
          <Route path='/work_panel' element={<WorkPanel />}/>
          <Route path='/order' element={<Order />}/>
          <Route path='/orders' element={<Orders />}/>
          <Route path='/statement' element={<Statement />}/>
          <Route path='/regulamin' element={<Regulamin />}/>
          <Route path='/addProduct' element={<AddProduct />}/>
          <Route path='/addCash' element={<AddCash/>}/>
          <Route path="*" element={<Wrong/>} />

      </Routes>
    </>
  );
}
