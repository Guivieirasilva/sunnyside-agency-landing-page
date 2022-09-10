import { Ilustration } from "../styles/Illustrations.style";

import ImageMilkDesktop from "../assets/images/desktop/image-gallery-milkbottles.jpg"
import ImageOrangeDesktop from "../assets/images/desktop/image-gallery-orange.jpg"
import ImageConeDesktop from "../assets/images/desktop/image-gallery-cone.jpg"
import ImageSugarDesktop from "../assets/images/desktop/image-gallery-sugarcubes.jpg"

import ImageMilkMobile from "../assets/images/mobile/image-gallery-milkbottles.jpg"
import ImageOrangeMobile from "../assets/images/mobile/image-gallery-orange.jpg"
import ImageConeMobile from "../assets/images/mobile/image-gallery-cone.jpg"
import ImageSugarMobile from "../assets/images/mobile/image-gallery-sugar-cubes.jpg"

export default function Illustrations(){
   return(
      <Ilustration>
         <div>
            <img className="box-image" src={ImageMilkDesktop} alt="imagem de garrafas de leite" />
            <img className="hidden" src={ImageMilkMobile} alt="imagem de garrafas de leite" />
           
         </div>
         <div>
            <img className="box-image" src={ImageOrangeDesktop} alt="imagem de uma laranja cortada em cima de um prato" />
            <img className="hidden" src={ImageOrangeMobile} alt="imagem de garrafas de leite" />

         </div>
         <div>
            <img className="box-image" src={ImageConeDesktop} alt="imagem de uma casquinha de sorvete vazia em formato de cone" />
            <img className="hidden" src={ImageConeMobile} alt="imagem de garrafas de leite" />
            
         </div>
         <div>
            <img className="box-image" src={ImageSugarDesktop} alt="image de cubos de açucar empilhados aleatóriamente" />
            <img className="hidden" src={ImageSugarMobile} alt="imagem de garrafas de leite" />

         </div>
      </Ilustration>
      
   )
}