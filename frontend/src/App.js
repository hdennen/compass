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
  {
    name: 'Area 4',
    before: 800,
    after: 650,
    amt: 725,
  },
  {
    name: 'Area 5',
    before: 700,
    after: 600,
    amt: 650,
  },

];

const areaDot = {stroke: '#ffe5a9', strokeWidth: 2, fill: 'white', r: 5}

function App() {
  return (
    <div className="App">
        <ComposedChart width={730} height={450} data={data} barGap={20}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#dadbdd" />
          <Area type="monotone" dataKey="amt" name="Average" dot={areaDot} fill="#ffe5a9" stroke="#ffe5a9" />
          <Bar dataKey="before" name="Confidence (Before)" barSize={20} fill="#8db1d3"/>
          <Bar dataKey="after" name="Confidence (After)" barSize={20} fill="#50cb71"/>
        </ComposedChart>
    </div>
  );
}

export default App;
