import styled, { css } from "styled-components";  

import "../index.css"

export const Container = styled.section`
   background: rgb(250,250,250);
   background: linear-gradient(12deg, rgba(250,250,250,1) 30%, rgba(250,250,250,0.4241758241758242) 45%, rgba(62,191,255,1) 75%);
   backdrop-filter: blur(10px);
   position: absolute;
   width: 100%;
   height: 100%;
   inset: 0;
   z-index: 10;
   display: flex;
   align-items: center;
   justify-content: center;
   opacity: 0;
   pointer-events: none;
   display: flex;
   transition: .8s;
   transform: translateY(50px);


   ${({isVisible}) => isVisible && css`  
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0px);

   `}

   >button{
      position: absolute;
      top: 1rem;
      right: 6rem;
      width: 40px;
      height: 50px;
      background-color: transparent;
      border: none;
      cursor: pointer;
      transition: .8s;

      >img{
         width: 100%;
      }
      &:hover, &:focus {
         transform: scale(1.1, 1.1);

      }
   }
   >nav{
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 3rem;
      >a{
         text-decoration: none;
         font-size: 2rem;
         color: var(--DarkBlue);
         transition:.5s;
         &:hover,&:focus{
            transform: scale(1.1,1.1);
            color: var(--White);
         }
      }
   }
`