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

   >h1{
      font-family: 'Fraunces', serif;
      font-weight: 700;
      font-size: 5rem;
      margin-top: 5rem;
      letter-spacing: 6px;

      @media screen and (max-width:950px){
         margin-top: 3rem;
         font-size: 4rem;
      }

      @media screen and (max-width:750px) {
         margin-top: 1rem;
         font-size: 3rem;
      }
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
   padding: 2%;

   >div{
      width: 280px;
      margin-left: 0;
      >img{
         width: 99%;
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

      @media screen and (max-width:1020px) {
         display: none;
      }
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
   >button{
      width: 50px;
      height: 50px;
      background-color: transparent;
      border: none;
      cursor: pointer;
      display: none;
      margin-left: 3rem;
      transition:.5s;
      >img{
         width: 100%;
      }
      &:hover, &:focus{
         transform: scale(1.1,1.1);
      }

      @media screen and (max-width:1020px) {
         display: block;
      }
   }
`