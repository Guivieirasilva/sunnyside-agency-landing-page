import styled from "styled-components";   

import HeaderBackground from "../assets/images/desktop/image-header.jpg"

import "../index.css"

export const Menu = styled.header`
   color: var(--White);
   height: 100vh;
   background: url(${HeaderBackground});
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   text-align: center;

   >h2{
      font-family: 'Fraunces', serif;
      font-weight: 700;
      font-size: 4rem;
      margin-top: 5rem;
      letter-spacing: 6px;
   }
   >div{
      margin-top: 3rem;
      >img{
         max-width: 36px;
         width: 100%;
      }
   }
`  
export const NavMenu = styled.nav`
   display: flex;
   justify-content: space-between;
   align-items: center;
   max-width: 80%;
   width: 100%;
   height: 90px;
   margin: 0 auto;
   padding: 0 5%;

   >div{
      width: 250px;

      >img{
         width: 100%;
      }
   }
   >ul{
      list-style: none;
      display: flex;
      flex-direction: row ;
      justify-content: space-between;
      align-items: center;
      gap: 10%;
      width: 450px;

      
      >li a{
         color: black;
         text-decoration: none;
         padding: 10px;
         color: var(--White);
         font-size: 1.2rem;
         transition: .5s;
         &:hover{
            color: #39a2d6;
         }
      }
      >li:nth-child(4){
         padding: 15px;
         background-color: var(--White);
         border-radius: 30px;
         transition: 1s;
         >a{
            color: var(--VeryDarkDesaturated);
            padding: 15px;
         }
         &:hover{
            transform: scale(1.1,1.1);
            background-color: #39a2d6;
            >a{color: var(--White);}
         }
      }
   }
`