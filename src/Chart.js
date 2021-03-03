import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import data from './data';

function Chart() {
  return (
    <LineChart
      width={900}
      height={300}
      data={data}
      margin={{
        top: 30,
        right: 30,
        left: 30,
        bottom: 30,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="mark"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
}

export default Chart;
