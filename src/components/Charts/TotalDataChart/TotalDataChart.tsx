import React from "react";
import { useAppSelector } from "../../../store/hooks";
import { EmissionData } from "../../../interfaces/interfaces";
import { getDates } from "../../../utils/functions";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { timeRangeOptions } from "../../../utils/miscellaneous";
import ChartContainer from "../ChartContainer/ChartContainer";
import ChartCounter from "../ChartCounter/ChartCounter";
import useStateAtoms from "../../../atoms/atoms";
import Select from "react-select";


export default function TotalDataChart(): JSX.Element {
   const { timeRange, setTimeRange } = useStateAtoms();

   const selectableData = useAppSelector((state) => {
      const data = state.chart.totalChart.value;

      if (timeRange?.type !== 'max') {
         const filteredData = data.filter((data: EmissionData) => {
            const rangeSelected = getDates(timeRange);

            if (!rangeSelected) return true

            const date = new Date(data.start).getTime();

            return date >= rangeSelected.from && date <= rangeSelected.to
         });

         return filteredData
      } else {

         return data
      }
   });

   console.log("rirendererojeroieio")


   return (
      <ChartContainer>
         <ChartCounter  data={selectableData}/>
         <ResponsiveContainer height={300} width="90%" >
            <LineChart width={600} height={300} data={selectableData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
               <Line
                  type="step"
                  dataKey="average"
                  stroke="#8884d8"
                  dot={selectableData.length < 60 ? true : false}
               />
               <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
               <XAxis
                  dataKey="end"
               />
               <YAxis />
               <Tooltip />
            </LineChart>
         </ResponsiveContainer>
         <Select
            value={timeRange}
            onChange={(range) => { setTimeRange(range); }}
            options={timeRangeOptions || null}
            isClearable={false}
            isSearchable={false}
         />
      </ChartContainer>
   )
}