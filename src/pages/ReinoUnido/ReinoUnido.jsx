import { ChartDonut, ChartBar, ChartGeo } from "../../components/Grafico/Chart";
import { dataFilme, dataSerie, dataGenero } from "../../dados/dadosReinoUnido";

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

import { iconAcao, iconComedia, iconFilmes, iconGlobo, iconRomance, iconOutros, iconSeries, iconTerror, iconUnicorn } from "../../assets";

export default function ReinoUnido() {
  return (
    <>
      <CardsContainer>
        {linkArrayCards.map(({ icon, label, graphic }) => (
          <Cards key={label}>
            <SLabel>
              <SIcon>{icon}</SIcon>
              <STitle>{label}</STitle>
            </SLabel>
            <SDivider />
            <SGraphic>{graphic}</SGraphic>
          </Cards>
        ))}
      </CardsContainer>

      <ChartsContainer>
        <AreaCharts>
          <SLabel>
            <SIcon><img src={iconFilmes} alt="Filmes" /></SIcon>
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
          <ChartGeo regiao='GB'/>
        </AreaCharts>

        <AreaCharts>
          <SLabel>
            <SIcon><img src={iconUnicorn} alt="Descrição Analítica" /></SIcon>
            <STitle>Análise</STitle>
          </SLabel>
          <SDivider />
          <SText>De acordo com o que foi apresentado nos gráficos e a porcentagem dos gêneros, conseguimos chegar a conclusão que o melhor investimento seria para Filmes de Comédia e Séries de Outros gêneros.
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
    graphic: <ChartDonut data={dataGenero} porcentagem="19%" genero="acao"/>,
  },
  {
    icon: <img src={iconTerror} alt="Terror" />,
    label: "Terror",
    graphic: <ChartDonut data={dataGenero} porcentagem="1%" genero="terror"/>,
  },
  {
    icon: <img src={iconComedia} alt="Comédia" />,
    label: "Comédia",
    graphic: <ChartDonut data={dataGenero} porcentagem="26%" genero="comedia"/>,
  },
  {
    icon: <img src={iconRomance} alt="Romance" />,
    label: "Romance",
    graphic: <ChartDonut data={dataGenero} porcentagem="18%" genero="romance"/>,
  },
  {
    icon: <img src={iconOutros} alt="Outros" />,
    label: "Outros",
    graphic: <ChartDonut data={dataGenero} porcentagem="36%" genero="outros"/>,
  },
];
