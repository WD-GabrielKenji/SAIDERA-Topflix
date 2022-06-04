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
import { Chart } from "react-google-charts";
import { Grafico, Titulo } from './styles';
import { populacao } from '../../dados/dadosGrafico';

export function ChartLine({ title, data, dataKey1, dataKey2 = '', grid }) {
  return (
    <Grafico>
      <Titulo className="chartTitle">{title}</Titulo>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke='#5550bd' />
          <YAxis />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
          <Legend />
          <Line type="monotone" dataKey={dataKey1} stroke="#8884d8" activeDot={{ r: 8 }} />
          {dataKey2 !== '' ? <Line type="monotone" dataKey={dataKey2} stroke="#82ca9d" /> : <text />}
        </LineChart>
      </ResponsiveContainer>
    </Grafico>
  )
}

export function ChartBar({ title, data, dataKey1, dataKey2, dataKey3, dataKey4, grid }) {
  return (
    <Grafico>
      <Titulo className="chartTitle">{title}</Titulo>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
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
          <Bar dataKey={dataKey3} fill="#FFBB28" />
          <Bar dataKey={dataKey4} fill="#FF8042" />
        </BarChart>
      </ResponsiveContainer>
    </Grafico>
  )
}

export function ChartGeo({ regiao }) {
  var options = {
    colorAxis: { colors: ['#FF4242', '#144FFF'] },
    backgroundColor: 'transparent',
    datalessRegionColor: 'transparent',
    region: regiao,
  };
  return (
    <Grafico>
      <Chart chartType="GeoChart"
        options={options}
        width="100%"
        height="200px"
        data={populacao} />
    </Grafico>
  )
}

export function ChartDonut({ data, porcentagem, genero }) {

  const COLORS = ['transparent', 'transparent', 'transparent', 'transparent', 'transparent'];
  if (genero === 'acao') {
    COLORS[0] = '#8884d8';
  } else if (genero === 'terror') {
    COLORS[1] = '#00C49F';
  } else if (genero === 'comedia') {
    COLORS[2] = '#FFBB28';
  } else if (genero === 'romance'){
    COLORS[3] = '#FF8042';
  }else {
    COLORS[4] = '#144FFF';
  }

  return (
    <Grafico>
      <PieChart width={120} height={120}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          position="center"
          innerRadius="70%"
          outerRadius="90%"
          paddingAngle={2}
          minAngle={50}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          <Label value={porcentagem} position="center" fill="#FF1453" fontSize="120%" fontWeight="bold" />
        </Pie>
      </PieChart>
    </Grafico>
  )
}