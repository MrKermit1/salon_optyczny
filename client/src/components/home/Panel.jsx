import Product from "./Product"

function Panel (parameters) {
    return (
        <>
            <div class=" bg-neutral-200 min-h-screen">
                <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 class="sr-only">Products</h2>
                    <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        <Product nazwa = "okulary" cena = "100PLN"/>
                        <Product nazwa = "fajniejsze okulary" cena = "200PLN"/>
                        <Product nazwa = "jeszcze bardziej fajniejsze okulary" cena = "300PLN"/>
                        <Product nazwa = "te okulary nie są fajne ale za to są drogie" cena = "10000PLN"/>
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </div>
                </div>
            </div>
        </>
    )
}export default Panel