import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";


export default function MainChart(): JSX.Element {

   const mainData = useAppSelector((state: RootState) => state.chart.mainChart.value);

   return (

      //Add conditional rendering of another line when compared with another country

      <ResponsiveContainer height={300} width="90%" >
         <LineChart width={600} height={300} data={mainData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line
               type={mainData.length < 150 ? "basis" : "step"}
               dataKey="average"
               stroke="#000000"
               dot={mainData.length < 60 ? true : false}
            />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis
               dataKey="end"
            />
            <YAxis />
            <Tooltip />
         </LineChart>
      </ResponsiveContainer>
   )
}