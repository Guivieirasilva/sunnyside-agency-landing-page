import { Menu, NavMenu } from "../styles/Header.style";

import NavMobile from "./NavMobile";

import Logo from "../assets/images/logo.svg"
import ArrowDown from "../assets/images/icon-arrow-down.svg"
import IconMenu from "../assets/images/icon-hamburger.svg"


import { useState } from "react";


export default function Header() {

   const [menuIsVisible, setMenuIsVisible] = useState(false)

   return(
      <Menu>
         <NavMobile menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible}/>
         <NavMenu>
            <div><img src={Logo} alt="Logo da empresa Sunniside" /></div>
               <ul>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Projects</a></li>
                  <li><a href="#">Contact</a></li>
               </ul>
               <button onClick={() => setMenuIsVisible(true)} ><img src={IconMenu} alt="botão para abrir o menu de navegação para celular" /></button>
         </NavMenu>
         <h1>We are creatives</h1>
         <div><img src={ArrowDown} alt="Seta apontando para baixo" /></div>
         
      </Menu>
   )
}