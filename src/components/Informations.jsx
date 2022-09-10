import { Footer, Redes } from "../styles/Informations.style";

import IconLogo from "../assets/images/logo.svg"
import IconFacebook from "../assets/images/icon-facebook.svg"
import IconInstagram from "../assets/images/icon-instagram.svg"
import IconTwitter from "../assets/images/icon-twitter.svg"
import IconPinterest from "../assets/images/icon-pinterest.svg"


export default function Informations(){
   return(
      <Footer>
         <div>
            <nav>
               <div><img src={IconLogo} alt=""/></div>
               <ul>
                  <li><a href="">About</a></li>
                  <li><a href="">Services</a></li>
                  <li><a href="">Projects</a></li>
               </ul>
            </nav>
            <Redes>
               <span><img src={IconFacebook} alt="Icone da rede social facebook" /></span>
               <span><img src={IconInstagram} alt="" /></span>
               <span><img src={IconTwitter} alt="" /></span>
               <span><img src={IconPinterest} alt="" /></span>
            </Redes>
         </div>
      </Footer>
   )
}