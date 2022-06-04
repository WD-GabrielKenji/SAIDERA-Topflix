import React from "react";

import { analiseFilm, analiseSerie, graficoIcon, clickIcon, click2Icon } from "../../assets";

import {
  CardsContainer,
  Cards,
  Label,
  CardTitle,
  SDivider,
  DescImg,
  CardImg,
  CardText,
  ImageHoverTextOverlay,
  SButton,
} from "./styles";

export function Analise() {
  return (
    <CardsContainer>
      {arrayCards.map(({ icon, label, image, text, text2, text3, to, toImg }) => (
        <Cards key={label}>
          <Label>
            {icon}
            <CardTitle>{label}</CardTitle>
          </Label>

          <SDivider />
          
          <DescImg>
            <CardImg>
              {image}
              <ImageHoverTextOverlay>
                <a href={toImg} target="_blank" rel="noreferrer">
                  <img src={clickIcon} alt="Click" />
                  <span>Click para visualizar</span>
                </a>
              </ImageHoverTextOverlay>
            </CardImg>
              
            <CardText>
              <p>{text}</p>
              <p>{text2}</p>
              <p>{text3}</p>

              <SButton href={to} target="_blank" rel="noreferrer">Analyze Now!</SButton>
            </CardText>
            
          </DescImg>
        </Cards>
      ))}
    </CardsContainer>
  );
}

const arrayCards = [
  {
    label: "Análise da IA para Filmes",
    icon: <img src={graficoIcon} alt="imagem de grafico" />,
    image: <img src={analiseFilm} alt="analise sobre filmes" />,
    toImg: "https://imgur.com/WBGeNQm",
    to: "https://colab.research.google.com/drive/1mfPW65Q3ui1Gqu1NAQRWyeSztvbZwPzD?usp=sharing",
    text: "Introduzimos um algoritmo de IA, seguindo uma linguagem de máquina não supervisionada, tendo como objetivo capturar filmes semelhantes a um filme específico (The Evil Inside).",
    text2: "Basicamente, o algoritmo identifica em um filme as semelhanças em outros, com relação às categorias de Gênero, Diretor, Ator e País lançado.",
    text3: "Resumindo é um algoritmo feito para recomendações de filmes, onde várias plataformas usam diversos modelos para aplicarem na regra de negócio das suas aplicações, tendo como objetivo passar a seus usuários possíveis novas escolhas a serem assistidas.",
  },
  {
    label: "Análise da IA para Filmes",
    icon: <img src={graficoIcon} alt="imagem de grafico" />,
    image: <img src={analiseSerie} alt="analise sobre filmes" />,
    toImg: "https://imgur.com/xw7tIF3",
    to: "https://colab.research.google.com/drive/1mfPW65Q3ui1Gqu1NAQRWyeSztvbZwPzD?usp=sharing",
    text: "Introduzimos um algoritmo de IA, seguindo uma linguagem de máquina não supervisionada, tendo como objetivo capturar séries semelhantes a uma série específica (Stranger Things).",
    text2: "Basicamente, o algoritmo identifica em uma série as semelhanças em outros, com relação às categorias de Gênero, Diretor, Ator e País lançado.",
    text3: "Resumindo é um algoritmo feito para recomendações de séries, onde várias plataformas usam diversos modelos para aplicarem na regra de negócio das suas aplicações, tendo como objetivo passar a seus usuários possíveis novas escolhas a serem assistidas.",
  },
]