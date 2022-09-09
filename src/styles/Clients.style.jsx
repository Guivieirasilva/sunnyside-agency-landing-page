import styled from "styled-components";

import "../index.css"

export const Testimonials = styled.article`
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
   align-items: center;
   height: 80vh;

   >h2{
      font-family: 'Fraunces', serif;
      font-weight: 700;
      font-size: 2rem;
   }
`
export const Customers = styled.section`
   display: flex;
   align-items: center;
   justify-content: space-between;
   text-align: center;
   width: 80%;
   gap: 5%;

   >div{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 50px;

      >div{
         width: 70px;
         height: 70px;
         border-radius: 50%;
         margin: 0 auto;
         margin-bottom: 3rem;
         >img{
            width: 110px;
            border-radius: 50%;
         }
      }
      >p{
         color:var(--VeryDarkGrayishBlue);
         width: 90%;
         margin: 0 auto;
         font-size: 1.3rem;
      }
      >div{
         top: 3rem;
         width: 100%;
         >h3{
            margin-bottom: 1rem ;
            font-family: 'Fraunces', serif;
            font-weight: 700;
            font-size: 1.6rem;
         }
         >p{
            color:var(--VeryDarkGrayishBlue);
            font-size: 1.3rem;
         }
      }
   }

`