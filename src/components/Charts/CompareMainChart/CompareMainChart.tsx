import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useAppSelector } from "../../../store/hooks";






export default function CompareMainChart(): JSX.Element {

   const compareMainData = useAppSelector(state => state.compareChart.compareMainChart.value);

   return (
      <>
         <ResponsiveContainer height={300} width="90%" >
            <LineChart width={600} height={300} data={compareMainData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
               <Line
                  type="step"
                  dataKey="average"
                  stroke="red"
                  dot={compareMainData.length < 60 ? true : false}
               />
               <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
               <XAxis
                  dataKey="end"
               />
               <YAxis />
               <Tooltip />
            </LineChart>
         </ResponsiveContainer>
      </>
   )
}