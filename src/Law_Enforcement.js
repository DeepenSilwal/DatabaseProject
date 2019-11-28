import React from 'react';
import './App.css';
import Law from './updated_law_enforcement.json';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
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
      <AreaChart
        width={1000}
        height={400}
        data={data}
        
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="County" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="Sworn_Full_Time" stroke="#8884d8"  />
        <Area type="monotone" dataKey="Sworn_Part_Time" stroke="#82ca9d" />
        <Area type="monotone" dataKey="Sworn_Total" stroke="#f2ea13" />
        <Area type="monotone" dataKey="Civilian_Full_Time" stroke="#010215" />
        <Area type="monotone" dataKey="Civilian_Part_Time" stroke="#82ca9d" />
        <Area type="monotone" dataKey="Civilian_Total" stroke="#ed130b" />
        <Area type="monotone" dataKey="FullTime_Total" stroke="#42daf9" />
        <Area type="monotone" dataKey="PartTime_Total" stroke="#91f942" />
      </AreaChart>
    </div>
  );
}

export default Law_Enforcement;
