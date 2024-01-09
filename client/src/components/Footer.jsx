//stopka
function Footer (){

    return(
        <>
            <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2023 <a href="https://github.com/MrKermit1/salon_optyczny/blob/main/README.md" className="hover:underline">Salon Optyczny™</a>. Wykonał i zaprojektował Olaf Rybkowski
                </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                        <li>
                            <a href="/about" className="hover:underline me-4 md:me-6">O stronie</a>
                        </li>
                        <li>
                            <a href="/regulamin" className="hover:underline me-4 md:me-6">Regulamin</a>
                        </li>
                        <li>
                            <a href="https://github.com/MrKermit1/salon_optyczny" className="hover:underline me-4 md:me-6">GitHub</a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:underline">Kontakt</a>
                        </li>
                    </ul>
            </footer>

        </>
    );





}export default Footer;