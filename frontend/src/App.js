import './App.css';
import { ComposedChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Area, Bar } from 'recharts';

const data = [
  {
    name: 'Area 1',
    before: 600,
    after: 800,
    amt: 700,
  },
  {
    name: 'Area 2', 
    before: 400,
    after: 900,
    amt: 650,
  },
  {
    name: 'Area 3',
    before: 500,
    after: 600,
    amt: 550,
  },

];

const areaDot = {stroke: '#ffe5a9', strokeWidth: 2, fill: 'white', r: 5}

function App() {
  return (
    <div className="App">
        <ComposedChart width={730} height={250} data={data} barGap={20}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#f5f5f5" />
          <Area type="monotone" dataKey="amt" dot={areaDot} fill="#ffe5a9" stroke="#ffe5a9" />
          <Bar dataKey="before" barSize={20} fill="#8db1d3"/>
          <Bar dataKey="after" barSize={20} fill="#50cb71" left={10} right={10}/>
        </ComposedChart>
    </div>
  );
}

export default App;
