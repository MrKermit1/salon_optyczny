import Product from "./Product"
import Axios from 'axios';
import { useState } from "react";
import { useEffect } from "react";
import React from 'react';
//panel uzytkownika/gościa
function Panel () {
    //stan tablicy z produktami
    const [productArr, setProductArr] = useState([]);
    useEffect(() => {
        //request wyciągający produkty z bazy
        Axios.post('http://localhost:3001/getProduct' ,{}
        ).then((response) => {
            //console.log(response.data)
            setProductArr(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    

    return (
        <>
            <div className=" bg-neutral-200 min-h-screen">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 flex-col lg:flex-row">
                
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {
                            productArr.map((product, key) => {
                                return <Product nazwa={product.nazwa} cena = {product.cena} opis = {product.opis} productId = {product.id} key={key}/>
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}export default Panel