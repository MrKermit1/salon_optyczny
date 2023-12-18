//import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react";
//import './Footer.css';
function Footer (){
    /*return(
        <>
            <div id="footer" className="bg-green-300 me-5">
                <Navbar className=" transition-height" id="footer2">
                    <NavbarBrand>
                        <p className="font-bold text-inherit">Salon Optyczny</p>
                    </NavbarBrand>
                    <NavbarContent className="hidden sm:flex gap-4" justify="center">
                        <NavbarItem>
                            <Link color="secondary" href="#">
                                Facebook
                            </Link>
                        </NavbarItem>

                        <NavbarItem>
                            <Link color="secondary" href="#">
                                Regulamin zamówień
                            </Link>
                        </NavbarItem>
                    </NavbarContent>
                </Navbar>
            </div>
        </>
    );*/




    return(
        <>
            <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2023 <a href="https://flowbite.com/" className="hover:underline">Salon Optyczny™</a>. All Rights Reserved.
                </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
            </footer>

        </>
    );





}export default Footer;