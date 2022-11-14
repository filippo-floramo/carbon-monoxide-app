import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { sortData } from "../../../utils/functions";
import useTotalChartData from "../../../hooks/useTotalChartdata";


export default function TotalDataChart() {

const {totalData, loading} = useTotalChartData();

   if(loading) {
     return  <>Loading..</>
   }

   const sortedTotalData = sortData(totalData);

   return (
      <>
         <ResponsiveContainer height={300} width="90%" >
            <LineChart width={600} height={300} data={sortedTotalData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
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