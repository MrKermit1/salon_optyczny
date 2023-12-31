import obrazek from '../../assets/okulary/obrazek1.jpg'
import { useNavigate } from 'react-router-dom';
//pojedyńczy produkt
function Product (props) {
    const navigate = useNavigate();

    //odsyłacz do tego konkretnego produktu
    const goToProduct = () => {
        navigate('/product' ,{replace:true,  state: {
            img: props.image !=null ? props.image:obrazek,
            nazwa: props.nazwa != null ? props.nazwa : "brak nazwy",
            cena: props.cena !=null ? props.cena : "0$",
            opis: props.opis !=null ? props.opis : "brak opisu",
            id: props.productId !=null ? props.productId : 0
        }})
    }
    return (
        <>
            <a className="group transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300"
                onClick={goToProduct}
            >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img src={props.image !=null ? props.image:obrazek} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="h-full w-full object-cover object-center group-hover:opacity-75" />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{props.nazwa != null ? props.nazwa : "brak nazwy"}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{props.cena !=null ? props.cena : "0$"}</p>
                
            </a>
        </>

    )
}export default Product