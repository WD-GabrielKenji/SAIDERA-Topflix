import { ChartDonut, ChartBar, ChartGeo } from "../../../components/Grafico/Chart"
import { dataFilme, dataSerie, dataGenero } from "../../../dados/brasil/dadosBrasil"
import { 
  SBrasil, 
  SGrafico, 
  Cards,
  SCard,
  SCardLabel,
  SDivider,
  SCardText
} from "./styles"

export default function Brasil() {
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
      <SBrasil>
        <SGrafico>
          <ChartBar data={dataFilme} title="Gêneros de filmes mais assistidos" dataKey1="1º Semana" dataKey2="2º Semana" dataKey3="3º Semana" dataKey4="4º Semana"/>
        </SGrafico>
        <SGrafico>
        <ChartBar data={dataSerie} title="Gêneros de séries mais assistidos" dataKey1="1º Semana" dataKey2="2º Semana" dataKey3="3º Semana" dataKey4="4º Semana"/>
        </SGrafico>
      </SBrasil>
      <SBrasil>
        <SGrafico>
          <ChartGeo regiao="BR"/>
        </SGrafico>
      </SBrasil>
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
