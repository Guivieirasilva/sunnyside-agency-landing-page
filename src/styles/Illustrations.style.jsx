import styled from "styled-components";

export const Ilustration = styled.section`
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   height: 20vh;
   >div{
      height: 100%;
      >.box-image, .hidden{
         max-width: 100%;
         width: 100%;
         height: 100%;
         object-fit: cover;
      }
      .hidden{ display:none }
   }
   @media screen and (max-width:590px) {
      grid-template-columns: repeat(2, 1fr);
     >div {
      .box-image{display:none;}
      .hidden{display:block;}
     }
     
    
   }
`