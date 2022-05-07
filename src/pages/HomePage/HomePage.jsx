import React from "react";

import { 
  HomeLogo, 
  infoIcon, 
  goalIcon, 
  benefitIcon,
  codingIcon,
} from "../../assets";

import {
  SButton,
  SHome,
  SHomeContent,
  SLogo,
  SText,
  STitle,
  HomeCards,
  SCard,
  SCardIcon,
  SDivider,
  SCardLabel,
  SCardText,
} from "./styles";

export function HomePage() {
  return (
    <>
      <SHome>
        <SHomeContent >
          <STitle>
            Venha conferir os dados <span>tome melhores decisões</span>
          </STitle>
          <SText>
            Saiba quais gêneros de filmes e séries são os melhores para seu
            investimento.
          </SText>
          <SButton href="/guia">Get Started!</SButton>
        </SHomeContent>

        <SLogo src={HomeLogo} alt="logo" />
      </SHome>

      <HomeCards>
        {linkArrayCards.map(({ icon, label, text }) => (
          <SCard key={label}>
            <SCardIcon>{icon}</SCardIcon>
            <SCardLabel>{label}</SCardLabel>
            <SDivider />
            <SCardText>{text}</SCardText>
          </SCard>
        ))}
      </HomeCards>
    </>
  );
}

const linkArrayCards = [
  {
    label: "SAIDEIRA TOPFLIX",
    icon: <img src={infoIcon} alt="Sobre Saideira TopFlix" />,
    text: "Saideira TopFlix é um website focado em coleta de dados para investimento cinematográfico.",
  },
  {
    label: "OBJETIVO",
    icon: <img src={goalIcon} alt="Objetivo" />,
    text: "Apresentar a porcentagem dos gêneros que estão sendo mais queridos de filmes e séries da plataforma Netflix nos países.",
  },
  {
    label: "BENEFÍCIO",
    icon: <img src={benefitIcon} alt="Beneficio" />,
    text: "Confira os dados apresentados, melhores seus resultados e adquira mais informações para tomar uma decisão.",
  },
  {
    label: "SOBRE NÓS",
    icon: <img src={codingIcon} alt="Sobre desenvolvedores" />,
    text: "Somos um grupo acadêmico, formado há 3 anos,  aprendendo e desenvolvendo projetos propostos na faculdade USJT.",
  },
];
