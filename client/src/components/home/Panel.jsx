import Product from "./Product"
import Axios from 'axios';
import { useState } from "react";
import { useEffect } from "react";

function Panel (parameters) {

    const [productArr, setProductArr] = useState([]);

    useEffect(() => {
        Axios.post('http://localhost:3001/getProduct' ,{}
        ).then((response) => {
            console.log(response.data)
            setProductArr(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    

    return (
        <>
            <div class=" bg-neutral-200 min-h-screen">
                <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 flex-col lg:flex-row">
                    <h2 class="sr-only">Products</h2>
                    <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {
                            productArr.map((product) => {
                                return <Product nazwa={product.nazwa} cena = {product.cena} opis = {product.opis} />
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}export default Panel