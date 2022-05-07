import styled from "styled-components";

import { v } from "../../../styles/variables";

// Top Canada
export const SCanada = styled.div`
  display: flex;
`;

export const SGrafico = styled.div`
  width: 70vh;
  margin-left: 50px;
  margin-bottom: 1vw;
`

export const Cards = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 1vw;
  margin-left: 50px;
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