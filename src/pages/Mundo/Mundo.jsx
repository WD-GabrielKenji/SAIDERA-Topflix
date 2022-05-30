import { ChartDonut, ChartBar, ChartGeo } from "../../components/Grafico/Chart";
import { dataFilme, dataSerie, dataGenero } from "../../dados/dadosMundo";

import { 
  Cards,
  SDivider,
  CardsContainer,
  SLabel,
  SIcon,
  STitle,
  SGraphic,
  SText,
  AreaCharts,
  ChartsContainer
} from "../styles";

import { iconAcao, iconComedia, iconFilmes, iconGlobo, iconRomance, iconSeries, iconTerror, iconUnicorn } from "../../assets";

export default function Mundo() {
  return (
    <>
      <CardsContainer>
        {linkArrayCards.map(({ icon, label, grapic }) => (
          <Cards key={label}>
            <SLabel>
              {icon}
              <STitle>{label}</STitle>
            </SLabel>
            <SDivider />
            <SGraphic>{grapic}</SGraphic>
          </Cards>
        ))}
      </CardsContainer>

      <ChartsContainer>
        <AreaCharts>
          <SLabel>
            <img src={iconFilmes} alt="Filmes" />
            <STitle>Filmes</STitle>
          </SLabel>
          <SDivider />
          <ChartBar data={dataFilme} title="Gêneros mais assistidos" dataKey1="1º Semana" dataKey2="2º Semana" dataKey3="3º Semana" dataKey4="4º Semana"/>
        </AreaCharts>

        <AreaCharts>
          <SLabel>
            <SIcon><img src={iconSeries} alt="Séries" /></SIcon>
            <STitle>Séries</STitle>
          </SLabel>
          <SDivider />
          <ChartBar data={dataSerie} title="Gêneros mais assistidos" dataKey1="1º Semana" dataKey2="2º Semana" dataKey3="3º Semana" dataKey4="4º Semana"/>
        </AreaCharts>
      </ChartsContainer>

      <ChartsContainer>
        <AreaCharts>
          <SLabel>
            <SIcon><img src={iconGlobo} alt="Grafico Global" /></SIcon>
            <STitle>População</STitle>
          </SLabel>
          <SDivider />
          <ChartGeo regiao='world'/>
        </AreaCharts>

        <AreaCharts>
          <SLabel>
            <SIcon><img src={iconUnicorn} alt="Descrição Analítica" /></SIcon>
            <STitle>Análise</STitle>
          </SLabel>
          <SDivider />
          <SText>De acordo com o que foi apresentado nos gráficos e a porcentagem dos gêneros, conseguimos chegar a conclusão que o melhor investimento seria para Filme em Ação e Série em Outros gêneros.
          </SText>
        </AreaCharts>
      </ChartsContainer>
    </>
  )
}

const linkArrayCards = [
  {
    icon: <img src={iconAcao} alt="Ação" />,
    label: "Ação",
    grapic: <ChartDonut data={dataGenero} porcentagem="28%" genero="acao"/>,
  },
  {
    icon: <img src={iconTerror} alt="Terror" />,
    label: "Terror",
    grapic: <ChartDonut data={dataGenero} porcentagem="0%" genero="terror"/>,
  },
  {
    icon: <img src={iconComedia} alt="Comédia" />,
    label: "Comédia",
    grapic: <ChartDonut data={dataGenero} porcentagem="3%" genero="comedia"/>,
  },
  {
    icon: <img src={iconRomance} alt="Romance" />,
    label: "Romance",
    grapic: <ChartDonut data={dataGenero} porcentagem="27%" genero="romance"/>,
  },{
    icon: <img src={iconRomance} alt="Romance" />,
    label: "Outros",
    grapic: <ChartDonut data={dataGenero} porcentagem="45%" genero="outros"/>,
  },
];