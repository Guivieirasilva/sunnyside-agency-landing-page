import styled from "styled-components";

import ImageEgg from "../assets/images/desktop/image-transform.jpg"
import ImageCup from "../assets/images/desktop/image-stand-out.jpg"
import ImageCherry from "../assets/images/desktop/image-graphic-design.jpg"
import ImageOrange from "../assets/images/desktop/image-photography.jpg"

import "../index.css"

export const GridContent = styled.main`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   grid-template-rows: repeat(3, 90vh);
   >section{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      >div{
         width: 60%;
         margin: 0 auto;
         >h3{
            font-family: 'Fraunces', serif;
            font-weight: 700;
            font-size: 3rem;
            margin-bottom: 2rem;
         }
         >p{
            margin-bottom: 2rem;
            line-height: 1.5;
            color: var(--VeryDarkGrayishBlue);
         }
         >button{
            border: none;
            background-color: transparent;
            font-size: 1.1rem;
            text-decoration: underline;
            cursor: pointer;
            transition: 1s;
            &:hover, &:focus{
               transform: scale(1.1,1.1);
               text-decoration: underline red;
            }
         }
      }
   }
   >.egg{
      background: url(${ImageEgg}) no-repeat;
      background-size: cover;
      background-position: center;
   }
   >.cup{
      background: url(${ImageCup}) no-repeat;
      background-size: cover;
      background-position: center;
   }
   >.design{
      background: url(${ImageCherry}) no-repeat;
      background-size: cover;
      background-position: center;
      position: relative;

      >div{
         position: absolute;
         bottom: 0;
         left: 50%;
         transform: translateX(-50%);
         width: 60%;
         height: 40%;
         display: flex;
         align-items: center;
         justify-content: center;
         flex-direction: column;
         text-align: center;
         >h3{
            font-size: 29px;
         }
         >p{
            font-size: 19px;

         }
      }
   }
   >.photography{
      background: url(${ImageOrange}) no-repeat;
      background-size: cover;
      background-position: center;
      position: relative;
      >div{
         position: absolute;
         bottom: 0;
         left: 50%;
         transform: translateX(-50%);
         width: 60%;
         height: 40%;
         display: flex;
         align-items: center;
         justify-content: center;
         flex-direction: column;
         text-align: center;
         >h3{
            font-size: 29px;
         }
         >p{
            font-size: 19px;

         }
      }
   }
   @media screen and (max-width:760px) {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(6, 90vh);

      >section div h3{
         font-size: 2rem;
      }
      >section div p{
         font-size: .9rem;
      }

      >.egg{
         grid-row-start: 1;
      }
   
      
   }
`