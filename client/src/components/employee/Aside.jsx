import { useNavigate } from "react-router-dom";

function Aside() {
    
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate('/')
    }

    return (
        <>
            <div id="left" className=" w-1/4 bg-gray-300 h-screen float-left">
                <ul className="text-center">
                    <li>
                        <a href="/work_panel">Strona główna</a>
                    </li>
                    <li>
                        <a href="/orders">Realizuj zamówienia</a>
                        
                        </li>
                    <li>Zrealizowane zamówienia</li>
                    <li>
                        <a href="/addProduct">Dodaj produkt</a>    
                    </li>
                    <li>
                        <a href=""
                        onClick={logout}
                        >Wyloguj się</a>
                    </li>
                </ul>
            </div>
        </>
    )
}export default Aside