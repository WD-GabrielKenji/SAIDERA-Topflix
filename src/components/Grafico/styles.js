import styled from "styled-components";

export const Grafico = styled.div`
  width: 100%;
  padding: 2%;
`;

export const Titulo = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 1.07rem;
  color: ${({ theme }) => theme.subTitle};

  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;
