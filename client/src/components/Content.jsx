import './Content.css'
import {Card, CardBody} from "@nextui-org/react";
import Text from './Text.jsx';
function Content (){
    return(
        <>
            <div className='bg-[url(src/assets/background.jpeg)]' id='content' >
                <p className="text-5xl text-center drop-shadow-xl py-10">Salon Optyczny</p>
                <div id="cards" className='lg:flex lg: justify-evenly lg:flex-row lg:min-h-full top-96 sm:flex-col text-center'>
                    
                    <Card className='lg:w-72  shadow-2xl md:transform md:motion-safe:hover:scale-110 lg:top-0  lg:text-lg sm:text-xs  sm:text-center  sm:my-32 my-32 items-center' text-center isBlurred={true} shadow='lg' isHoverable={true}>
                        <CardBody className='items-center'>
                            <p className='text-xl text-center md:w-64 flex items-center'>Oferujemy szeroki wybór usług i produktów optycznych, aby zapewnić naszym <br/>klientom doskonałą jakość widzenia i stylowe okulary.</p>
                        </CardBody>
                    </Card>
                
                    <Card className='lg:w-72 shadow-2xl md:transform md:motion-safe:hover:scale-110 sm:top-44 lg:top-0  lg:text-lg sm:text-xs  sm:text-center sm:my-32 my-32 text-center items-center' isBlurred={true} shadow='lg' isHoverable={true}>
                        <CardBody className='items-center'>
                            <p className='text-xl text-center w-64'>Nasi doświadczeni optometryści są gotowi pomóc Ci w doborze odpowiednich okularów lub soczewek kontaktowych, które będą idealnie dopasowane do Twoich potrzeb wzrokowych. Wykonamy profesjonalne badanie wzroku, aby upewnić się, że Twoje okulary lub soczewki kontaktowe są idealnie dopasowane.</p>
                        </CardBody>
                    </Card>

                    <Card className='lg:w-72 shadow-2xl md:transform md:motion-safe:hover:scale-110 sm:top-44 lg:top-0  lg:text-lg sm:text-xs  sm:text-center  sm:my-32 my-32 text-center items-center' isBlurred={true} shadow='lg' isHoverable={true}>
                        <CardBody className=' text-center items-center'>
                            <p className='text-xl text-center w-64'>W naszym salonie optycznym znajdziesz szeroki wybór najnowszych modeli okularów modowych, w różnorodnych kształtach, kolorach i stylach. Nasz personel jest zawsze gotowy do udzielenia porad dotyczących trendów w modzie okularowej i pomoże Ci znaleźć idealne okulary, które podkreślą Twój indywidualny styl.</p>
                        </CardBody>
                    </Card>
                </div>
                
            </div>
        </>
    )
}export default Content;