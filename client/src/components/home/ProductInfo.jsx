import obrazek from '../../assets/okulary/obrazek1.jpg'

function ProductInfo (props) {

    return (
        <div className='bg-green-400 min-h-screen '>
            <div className="ml-14 mt-14 float-left bg-green-400">
                <img src={props.image != null ? props.image : obrazek} alt="" width="500"/>
            </div>
            <div className='float-left bg-green-400 flex justify-center' >
                <p>{props.opis}</p>
                <button>Kup</button>
            </div>
        </div>
    )
}export default ProductInfo