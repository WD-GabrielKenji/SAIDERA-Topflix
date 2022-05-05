import { Link } from "react-router-dom";
import styled from "styled-components";

import { v } from "../../styles/variables";

// Top Home
export const SHome = styled.section`
  min-height: 45vh;
  width: 100%;
  
  padding: 0 6%;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 47px;
  background: ${({ theme }) => theme.bg5};
  box-shadow:  -20px 20px 19px ${({ theme }) => theme.cardShadow},
               20px -20px 19px ${({ theme }) => theme.cardShadow2};

  @media (max-width: 1119px){
    padding:5%;
    padding-top: 2.5rem;
  }

  @media (max-width: 1220px){
    flex-flow: column-reverse;
  }
`; 

export const SHomeContent = styled.div``;

export const STitle = styled.h3`
  font-size: 2.2rem;
  color: ${({ theme }) => theme.textTitle};
  text-transform: uppercase;
  text-shadow: -0.06em 0.03em 0.045em ${({ theme }) => theme.cardShadow};
  font-family: 'Noto Serif', sans-serif;
  letter-spacing: 1px;

  span{
    font-size: 1.7rem;
    display: inline-block;
    color: #E63D00;
  }
`;

export const SText = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textCard};
  padding: 1rem 0;

  font-family: "Poppins", sans-serif;
`;

export const SButton = styled.a`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.8rem 3rem;

  border-radius: 5rem;
  background: ${({ theme }) => theme.bgButton};
  color: ${({ theme }) => theme.pink};
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  transition: all 0.3s linear;

  font-size: 1.4rem;
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;
  letter-spacing: 1.83px;

  :hover{
    transform: scale(1.1);
    text-shadow: 0.06em 0.05em 0.04em ${({ theme }) => theme.cardShadow};
    font-weight: 700;
  }
`;

export const SLogo = styled.img`
  width: 290px;
  animation: float 4s linear infinite;

  @keyframes float{
    0%, 100%{
      transform: translateY(0rem);
    }
    50%{
      transform: translateY(-2rem);
    }
  }
`;

// bass Home
export const HomeCards = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 5vw;
  flex-wrap: wrap;
`;

export const SCard = styled.div`
  width: 35vh;
  padding: 2.5%;

  border-radius: 47px;
  background: ${({ theme }) => theme.bg5};
  box-shadow:  -20px 20px 23px ${({ theme }) => theme.cardShadow},
               20px -20px 23px ${({ theme }) => theme.cardShadow2};

  :hover{
    transform: scale(1.04);
  }

  @media (max-width: 1366px){
    margin-top: 3.3vw;
  }
`; 

export const SCardIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SDivider = styled.div`
  height: 0.5px;
  width: 100%;
  background: ${({ theme }) => theme.divider};
  margin-bottom: ${v.lgSpacing};
`;

export const SCardLabel = styled.h4`
  display: flex;
  justify-content: center;
  margin: ${v.mdSpacing} 0;

  font-family: 'Poppins', sans-serif;
  font-size: 1.3rem;
  text-align: center;
  color: ${({ theme }) => theme.textTitle};
  letter-spacing: 1.38px;
`;

export const SCardText = styled.p`
  margin-top: 1.42rem;

  text-align: center;
  font-size: 0.92rem;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  color: ${({ theme }) => theme.textCard};
`;