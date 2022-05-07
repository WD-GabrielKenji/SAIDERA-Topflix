import Chart from "react-google-charts";
import { populacao } from "../../dados/grafico/dadosGrafico";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart, 
  Pie, 
  Cell,
  Label
} from 'recharts';
import Text from 'react';
import { Grafico, GTitulo } from './styles';

export function ChartLine({title, data, dataKey1, dataKey2 = '', grid}) {
  return (
    <Grafico>
        <GTitulo>{title}</GTitulo>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke='#5550bd'/>
          <YAxis />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>}
          <Legend />
          <Line type="monotone" dataKey={dataKey1} stroke="#8884d8" activeDot={{ r: 8 }} />
          {dataKey2 != '' ? <Line type="monotone" dataKey={dataKey2} stroke="#82ca9d" /> : <Text/>}
        </LineChart>
      </ResponsiveContainer>
    </Grafico>
  )
}

export function ChartBar({title, data, dataKey1, dataKey2, dataKey3, dataKey4, grid}) {
  return (
    <Grafico>
      <GTitulo>{title}</GTitulo>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {grid && <CartesianGrid strokeDasharray="3 3" />}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={dataKey1} fill="#8884d8" />
          <Bar dataKey={dataKey2} fill="#82ca9d" />
          <Bar dataKey={dataKey3} fill="#ff9f40" />
          <Bar dataKey={dataKey4} fill="#787800" />
        </BarChart>
      </ResponsiveContainer>
    </Grafico>
  )
}

export function ChartGeo({regiao}) {
  const options = {
    region: regiao,
    colorAxis: { colors: "#787800" },
    backgroundColor : 'transparent'
  };
  return (
    <Grafico>
      <Chart
        options={options}
        height="30vh"
        chartType="GeoChart"
        data={populacao}
      />
    </Grafico>
  )
}

export function ChartDonut({data, porcentagem, genero}){
  const COLORS = ['transparent', 'transparent', 'transparent', 'transparent'];
  if(genero == 'acao'){
    COLORS[0] = '#8884d8';
  }else if(genero == 'terror'){
    COLORS[1] = '#82ca9d';
  }else if(genero == 'comedia'){
    COLORS[2] = '#ff9f40';
  }else{
    COLORS[3] = '#787800';
  }
  return (
    <Grafico>
      <PieChart width={500} height={100}>
          <Pie
            data={data}
            cx={108}
            cy={50}
            innerRadius={30}
            outerRadius={40}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            <Label value={porcentagem} position="center" />
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
    </Grafico>
  )
}