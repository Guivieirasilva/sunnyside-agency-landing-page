import styled from "styled-components";

import "../index.css"

export const Footer = styled.footer`
   background-color: var(--DarkModerate);
   padding-bottom: 2rem;
   >div{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      
      >nav{
         flex-direction: column;
         margin: 4rem 0;
         >div{
            width: 250px;
            margin: 3rem auto;
            >img{
               width: 100%;
            }
         }
         >ul{
            list-style: none;
            display: flex;
            width: 500px;
            justify-content: space-between;
            margin-bottom: 1rem;
            align-items: center;
            >li a{
               font-size: 25px;
               text-decoration: none;
               color: var(--White);
               transition: .5s;

               &:hover, &:focus{
                  color: var(--GrayishBlue);
               }
            }
         }
         @media screen and (max-width:800px){
            >div{
               width:190px;
            }
            >ul{
               width: 250px;
               margin-bottom: 0;

               >li a{
                  font-size: 17px;
               }
            }
         }
         
      }
      
   }
   
`

export const Redes = styled.section`
   display: flex;
   width: 30%;
   justify-content: space-between;
   margin-bottom: 4rem;

   >span{
      cursor: pointer;
      transition: .5s;
      >img{
         width: 25px;
      }
      &:hover, &:focus{
         transform: scale(1.3, 1.3);
         
      }
   }
   @media screen and (max-width:550px){
      >span img{ width:19px;}
   }
`