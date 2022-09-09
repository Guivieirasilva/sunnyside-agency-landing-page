import { Customers, Testimonials } from "../styles/Clients.style";

import ClientEmily from "../assets/images/image-emily.jpg"
import ClientJennie from "../assets/images/image-jennie.jpg"
import ClientThomas from "../assets/images/image-thomas.jpg"


export default function Clients(){
   return(
      <Testimonials>
         <h2>Client Testimonials</h2>
         <Customers>
            <div>
               <div><img src={ClientEmily} alt="" /></div>
               <p>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
               <div>
                  <h3>Emily R.</h3>
                  <p>Marketing Director</p>
               </div>
            </div>
            <div>
               <div><img src={ClientThomas} alt="" /></div>
               <p>Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
               <div>
                  <h3>Thomas S.</h3>
                  <p>Chief Operating Officer</p>
               </div>
            </div>
            <div>
               <div><img src={ClientJennie} alt="" /></div>
               <p>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!.</p>
               <div>
                  <h3>Jennie F.</h3>
                  <p>Business Owner</p>
               </div>
            </div>
         </Customers>
      </Testimonials>
   )
}