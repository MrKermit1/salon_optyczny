import {Navbar, NavbarBrand, NavbarContent, NavbarItem,  Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
import React from "react";
import App from "./App";
import UserNav from "./home/User";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import  {Link} from 'react-router-dom';
function Nav(props) {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [email, setEmail] = useState(props.email !=null ? props.email : "");
  const navigate = useNavigate();
  const menuItems = [
    "Logowanie",
    "Rejestracja",
    "Informacje",
    "Regulamin",
  ];

  const dataToPass = {data: "email"}

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <Link
        to={{ pathname: '/acc', state: dataToPass }}
      >
        <NavbarContent className={props.email !=null && props.status ? props.email : " hidden"}>
          <NavbarItem className="hidden lg:flex">
            <UserNav className={props.email !="" ? props.email : " hidden"} name = {props.email !=null ? props.email : ""} desc="User"/>
          </NavbarItem>
        </NavbarContent>
      </Link>
      
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/login"
            to={{pathname: '/login'}}
          >Logowanie</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/register"
            to={{pathname: '/register'}}
          >Rejestracja</Link>
        </NavbarItem>

      </NavbarContent>
      
      
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
    
  );
}export default Nav;
