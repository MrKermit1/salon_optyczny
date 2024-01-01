import { useEffect, useState } from "react";
import Axios from "axios";
import React from "react";
//wyświetla złożone zamówienia
function Orders() {
  //stan tablicy z zamówieniami
  const [ordersArr, setOrdersArr] = useState([]);

  useEffect(() => {
    //request wyciągający zamówienia
    Axios.post('http://localhost:3001/getOrders', {}).then((response) => {
      //ustawienie stanu tablicy zamówień
      setOrdersArr(response.data);
    });
  }, []);

  return (
    <>
      <div id="left" className="w-full sm:w-1/4 bg-gray-300 sm:h-screen float-left">
        <ul className="text-center">
          <li>
            <a href="">Realizuj zamówienia</a>
          </li>
          <li>Zrealizowane zamówienia</li>
          <li>Zarządzaj użytkownikami</li>
        </ul>
      </div>

      <div id="center" className="w-full sm:w-3/4 h-screen float-left overflow-x-auto">
        <table className="w-full border-collapse border border-slate-500 text-center ml-auto mr-auto">
          <thead>
            <tr>
              <th className="border border-slate-600 p-2">id</th>
              <th className="border border-slate-600 p-2">nazwa</th>
              <th className="border border-slate-600 p-2">email</th>
              <th className="border border-slate-600 p-2">data</th>
              <th className="border border-slate-600 p-2">id salonu</th>
              <th className="border border-slate-600 p-2">status</th>
              <th className="border border-slate-600 p-2">id produktu</th>
              <th className="border border-slate-600 p-2">Realizacja</th>
            </tr>
          </thead>
          <tbody>
            {ordersArr.map((order) => (
              <tr key={order.id}>
                <td className="border border-slate-600 p-2">{order.id}</td>
                <td className="border border-slate-600 p-2">{order.nazwa}</td>
                <td className="border border-slate-600 p-2">{order.email}</td>
                <td className="border border-slate-600 p-2">{order.data}</td>
                <td className="border border-slate-600 p-2">{order.id_salonu}</td>
                <td className="border border-slate-600 p-2">{order.status}</td>
                <td className="border border-slate-600 p-2">{order.id_produktu}</td>
                <td className="border border-slate-600 p-2">
                  <button className="border-black rounded-lg">Realizuj</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Orders;
