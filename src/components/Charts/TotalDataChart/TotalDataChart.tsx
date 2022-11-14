import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";


export default function TotalDataChart() {

   const totalData = useSelector((state: RootState) => state.chart.totalChart.value);

   return (
      <>
         <ResponsiveContainer height={300} width="90%" >
            <LineChart width={600} height={300} data={totalData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
               <Line type="monotone" dataKey="average" stroke="#8884d8" />
               <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
               <XAxis
                  dataKey="end"
                  tickFormatter={date => new Date(date).toLocaleDateString('en-EN')}
               />
               <YAxis />
               <Tooltip />
            </LineChart>
         </ResponsiveContainer>
      </>
   )
}