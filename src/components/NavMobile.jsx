import {Container} from "../styles/NavMobile.styles"

import IconClose from "../assets/images/icon-close-menu.svg"
import { useEffect } from "react"


export default function NavMobile({menuIsVisible, setMenuIsVisible}){

   useEffect(() => {
      document.body.style.overflowY = menuIsVisible ? "hidden" : "auto" ;
   }, [menuIsVisible])

   return(
      <Container isVisible={menuIsVisible}>
         <button onClick={() => setMenuIsVisible(false)}><img src={IconClose} alt="Icone de X para fechar o menu" /></button>
         <nav>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
         </nav>
      </Container>
   )
}