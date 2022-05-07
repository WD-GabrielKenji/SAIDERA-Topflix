import { ChartDonut, ChartBar, ChartGeo } from "../../components/Grafico/Chart"
import { dataFilme, dataSerie, dataGenero } from "../../dados/dadosBrasil"
import { 
  SMain, 
  SGrafico, 
  Cards,
  SCard,
  SCardLabel,
  SDivider,
  SCardText
} from "../styles"

export default function ReinoUnido() {
  return (
    <>
      <Cards>
        {linkArrayCards.map(({ label, text }) => (
          <SCard key={label}>
            <SCardLabel>{label}</SCardLabel>
            <SDivider />
            <SCardText>{text}</SCardText>
          </SCard>
        ))}
      </Cards>
      <SMain>
        <SGrafico>
          <ChartBar data={dataFilme} title="Gêneros de filmes mais assistidos" dataKey1="1º Semana" dataKey2="2º Semana" dataKey3="3º Semana" dataKey4="4º Semana"/>
        </SGrafico>
        <SGrafico>
        <ChartBar data={dataSerie} title="Gêneros de séries mais assistidos" dataKey1="1º Semana" dataKey2="2º Semana" dataKey3="3º Semana" dataKey4="4º Semana"/>
        </SGrafico>
      </SMain>
      <SMain>
        <SGrafico>
          <ChartGeo regiao='GB'/>
        </SGrafico>
      </SMain>
    </>
  )
}

const linkArrayCards = [
  {
    label: "Ação",
    text: <ChartDonut data={dataGenero} porcentagem="35%" genero="acao"/>,
  },
  {
    label: "Terror",
    text: <ChartDonut data={dataGenero} porcentagem="25%" genero="terror"/>,
  },
  {
    label: "Comédia",
    text: <ChartDonut data={dataGenero} porcentagem="25%" genero="comedia"/>,
  },
  {
    label: "Romance",
    text: <ChartDonut data={dataGenero} porcentagem="15%" genero="romance"/>,
  },
];
