import styled from "styled-components";

import { v } from "../styles/variables";

// Cards
export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: ${v.xlSpacing};
`;

export const Cards = styled.div`
  width: 37vh;
  height: 38vh;
  padding: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 47px;
  background: ${({ theme }) => theme.bg5};
  box-shadow:  -20px 20px 23px ${({ theme }) => theme.cardShadow},
                20px -20px 23px ${({ theme }) => theme.cardShadow2};

  :hover{
    transform: scale(1.02);
  }
`;

export const SLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 0.625rem;
`;

export const SIcon = styled.div`
  margin-right: 0.67rem;
`;

export const STitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.textTitle};
  letter-spacing: 1.2px;
`;

export const SGraphic = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SDivider = styled.div`
  height: 0.5px;
  width: 100%;
  margin: 6px 0;
  background: ${({ theme }) => theme.divider};
  margin-bottom: ${v.xlSpacing};
`;

// Area Charts
export const ChartsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;
  gap: 4%;
`;

export const AreaCharts = styled.div`
  width: 50%;

  padding: 2%;
  
  border-radius: 47px;
  background: ${({ theme }) => theme.bg5};
  box-shadow:  -20px 20px 23px ${({ theme }) => theme.cardShadow},
                20px -20px 23px ${({ theme }) => theme.cardShadow2};

  :hover{
    transform: scale(1.02);
  }
`;

// Geo Charts
export const SText = styled.p`
  padding: 0 1.73rem;

  text-align: justify;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => theme.textCard};
`;
