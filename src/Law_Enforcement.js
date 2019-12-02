import React from 'react';
import './App.css';
import Law from './updated_law_enforcement.json';
import {
  Bar, BarChart, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import {
  AreaChart, Area
} from 'recharts';


Law.map(obj => {obj["Sworn_Full_Time"] = Number.parseFloat(obj["Sworn_Full_Time"]); return obj;});
Law.map(obj => {obj["Sworn_Part_Time"] = Number.parseFloat(obj["Sworn_Part_Time"]); return obj;});
Law.map(obj => {obj["Sworn_Total"] = Number.parseFloat(obj["Sworn_Total"]); return obj;});
Law.map(obj => {obj["Civilian_Full_Time"] = Number.parseFloat(obj["Civilian_Full_Time"]); return obj;});
Law.map(obj => {obj["Civilian_Part_Time"] = Number.parseFloat(obj["Civilian_Part_Time"]); return obj;});
Law.map(obj => {obj["Civilian_Total"] = Number.parseFloat(obj["Civilian_Total"]); return obj;});
Law.map(obj => {obj["FullTime_Total"] = Number.parseFloat(obj["FullTime_Total"]); return obj;});
Law.map(obj => {obj["PartTime_Total"] = Number.parseFloat(obj["PartTime_Total"]); return obj;});


const data= Law;
console.log(data);

function Law_Enforcement() {
  return (
    <div>
      <BarChart
        width={850}
        height={400}
        data={data}
        margin={{
            top: 20, right: 30, left: 20, bottom: 5,
          }}
        
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="County" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar  dataKey="Sworn_Full_Time" stackId="a" fill="#8884d8"  />
        <Bar  dataKey="Sworn_Part_Time" stackId="a" fill="#82ca9d" />
        <Bar  dataKey="Sworn_Total" stackId="a" fill="#f2ea13" />
        <Bar  dataKey="Civilian_Full_Time"stackId="a" fill="#010215" />
        <Bar  dataKey="Civilian_Part_Time" stackId="a"fill="#82ca9d" />
        <Bar  dataKey="Civilian_Total" stackId="a" fill ="#ed130b" />
        <Bar  dataKey="FullTime_Total"stackId="a" fill="#42daf9" />
        <Bar  dataKey="PartTime_Total"stackId="a" fill="#91f942" />
      </BarChart>
    </div>
    
  );
}

export default Law_Enforcement;
