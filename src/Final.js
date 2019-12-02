
import React from 'react';
import './App.css';
import  final from './crimes_vs_lawenforcement.json';
import {
  ScatterChart, Scatter, XAxis, YAxis,ZAxis, CartesianGrid, Tooltip, Legend, Cell
} from 'recharts';
import {
  AreaChart, Area
} from 'recharts';

import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';


final.map(obj => {obj["Total_Crimes"] = Number.parseFloat(obj["Total_Crimes"]); return obj;});
final.map(obj => {obj["Total_LawEnforcement"] = Number.parseFloat(obj["Total_LawEnforcement"]); return obj;});

const colors = scaleOrdinal(schemeCategory10).range();
const data= final;

console.log(data);
function Final() {
  return (
    <div>
        <ScatterChart id = "chart"    
        width={850}
        height={400}
        margin={{
          top: 20, right: 20, bottom: 20, left: 20,
        }}
      >
        <CartesianGrid />
        <XAxis  dataKey="County" name="County"  />
        <YAxis type="number" dataKey= "Total_Crimes"  />
        <ZAxis type="number" dataKey= "Total_LawEnforcement"  />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter name="A school" data={data} fill="#ed130b">
        {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />)
        }
        </Scatter>
      </ScatterChart>

    </div>
  );
}

export default Final;



