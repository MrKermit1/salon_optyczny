import obrazek from '../../assets/okulary/obrazek1.jpg'


function Product (props) {
    return (
        <>
            <a href="#" class="group transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img src={props.image !=null ? props.image:obrazek} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center group-hover:opacity-75" />
                </div>
                <h3 class="mt-4 text-sm text-gray-700">{props.nazwa != null ? props.nazwa : "brak nazwy"}</h3>
                <p class="mt-1 text-lg font-medium text-gray-900">{props.cena !=null ? props.cena : "0$"}</p>
            </a>
        </>

    )
}export default Product