import styled from "styled-components";

import { v } from "../../styles/variables";

// Cards
export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: ${v.xlSpacing};
  margin-top: ${v.xlSpacing};
`;

export const Cards = styled.div`
  width: 100%;
  padding: 2%;

  border-radius: 47px;
  background: ${({ theme }) => theme.bg5};
  box-shadow: -20px 20px 23px ${({ theme }) => theme.cardShadow},
               20px -20px 23px ${({ theme }) => theme.cardShadow2};
`;

export const Label = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
`;

export const CardIcon = styled.div``;

export const CardTitle = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.textTitle};
  letter-spacing: 1.2px;
`;

export const SDivider = styled.div`
  height: 0.5px;
  width: 100%;
  margin: 6px 0;
  background: ${({ theme }) => theme.divider};
  margin-bottom: ${v.xlSpacing};
`;

export const DescImg = styled.div`
  display: flex;
  gap: 26px;
`;

export const CardImg = styled.div`
  position: relative;

  img {
    display: block;
    width: 420px;
    border-radius: 33px;
    border: 10px ridge ${({ theme }) => theme.bg3};
  }
`;

export const ImageHoverTextOverlay = styled.div`
  position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 149, 120, 0.6);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.25s;
    backdrop-filter: blur(5px);
    border-radius: 33px;
    border: 10px ridge ${({ theme }) => theme.bg3};
  
  * {
    transform: translateY(20px);
    transition: transform 0.25s;
  }

  :hover {
    opacity: 1;

    *{
      transform: translateY(0);
    }
  }

  a{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    
  }
  
  img{
    width: 3.5rem;
    border: 0;
  }

  span {
    margin-top: 0.575em;
    color: #ffffff;
    font-family: 'Quicksand', sans-serif;
    font-size: 1.45em;
    font-weight: 500;
  }
`;

export const CardText = styled.p`
  text-align: justify;

  font-size: 1.033rem;
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => theme.textCard};

  p{
    margin-bottom: 0.575rem;
  }
`;

export const SButton = styled.a`
  margin-top: 1.5rem;
  padding: 0.8rem 3rem;
  float: right;
  margin-right: 0.765rem;

  border-radius: 5rem;
  background: ${({ theme }) => theme.bgButton};
  color: ${({ theme }) => theme.pink};
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  transition: all 0.3s linear;

  font-size: 1.1rem;
  cursor: pointer;
  text-decoration: none;
  font-weight: 400;
  letter-spacing: 1.83px;

  :hover{
    transform: scale(1.05);
    font-weight: 500;
  }
`;