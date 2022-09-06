import { Menu, NavMenu } from "../styles/Header.style";
import Logo from "../assets/images/logo.svg"
import ArrowDown from "../assets/images/icon-arrow-down.svg"


export default function Header() {
   return(
      <Menu>
         <NavMenu>
            <div><img src={Logo} alt="Logo da empresa Sunniside" /></div>
               <ul>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Projects</a></li>
                  <li><a href="#">Contact</a></li>
               </ul>
         </NavMenu>
         <h2>We are Creatives</h2>
         <img src={ArrowDown} alt="Seta apontando para baixo" />
      </Menu>
   )
}