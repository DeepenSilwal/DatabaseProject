import React from 'react';
import './App.css';
import crimes from './updated_crimes.json';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import {
  AreaChart, Area
} from 'recharts';

crimes.map(obj => {obj["Total_Crimes"] = Number.parseFloat(obj["Total_Crimes"]); return obj;});
crimes.map(obj => {obj["Murder"] = Number.parseFloat(obj["Murder"]); return obj;});
crimes.map(obj => {obj["Rape"] = Number.parseFloat(obj["Rape"]); return obj;});
crimes.map(obj => {obj["Robbery"] = Number.parseFloat(obj["Robbery"]); return obj;});
crimes.map(obj => {obj["Assault"] = Number.parseFloat(obj["Assault"]); return obj;});
crimes.map(obj => {obj["Property_Damage"] = Number.parseFloat(obj["Property_Damage"]); return obj;});
crimes.map(obj => {obj["Burglary"] = Number.parseFloat(obj["Burglary"]); return obj;});
crimes.map(obj => {obj["Larceny"] = Number.parseFloat(obj["Larceny"]); return obj;});
crimes.map(obj => {obj["Motor_Vehicle_Theft"] = Number.parseFloat(obj["Motor_Vehicle_Theft"]); return obj;});

const data= crimes;

console.log(crimes);
function Crimes() {
  return (
    <div>
      <AreaChart
        width={850}
        height={400}
        data={data}
        
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="County" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="Murder" stroke="#8884d8"  />
        <Area type="monotone" dataKey="Rape" stroke="#82ca9d" />
        <Area type="monotone" dataKey="Robbery" stroke="#f2ea13" />
        <Area type="monotone" dataKey="Property_Damage" stroke="#010215" />
        <Area type="monotone" dataKey="Burglary" stroke="#82ca9d" />
        <Area type="monotone" dataKey="Larceny" stroke="#ed130b" />
        <Area type="monotone" dataKey="Motor_Vehicle_Theft" stroke="#42daf9" />
      </AreaChart>
    </div>
  );
}

export default Crimes;
