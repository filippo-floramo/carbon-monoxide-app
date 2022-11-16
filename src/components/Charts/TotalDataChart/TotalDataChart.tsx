import React from "react";
import { useAppSelector } from "../../../store/hooks";
import { RootState } from "../../../store/store";
import { EmissionData } from "../../../interfaces/interfaces";
import { getDates } from "../../../utils/functions";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { TimeRangeOptions } from "../../../interfaces/interfaces";
import useStateAtoms from "../../../atoms/atoms";
import Select from "react-select";

export const timeRangeOptions: TimeRangeOptions[] = [
   {
      value: 'whole_period',
      label: 'Whole Period',
      type: 'max'
   },
   {
      value: 'last_one_year',
      label: 'Last one year',
      type: 'year',
      amount: 1
   },
   {
      value: 'last_six_months',
      label: 'Last 6 months',
      type: 'month',
      amount: 6
   },
   {
      value: 'last_three_months',
      label: 'Last 3 months',
      type: 'month',
      amount: 3
   },
   {
      value: 'last_one_month',
      label: 'Last month',
      type: 'month',
      amount: 1
   }
]

export default function TotalDataChart(): JSX.Element {
   const { timeRange, setTimeRange } = useStateAtoms();

   const selectableData = useAppSelector((state: RootState) => {
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
      <>
         <ResponsiveContainer height={300} width="90%" >
            <LineChart width={600} height={300} data={selectableData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
               <Line
                  type={timeRange?.type === "month" ? "basis" : "step"}
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
      </>
   )
}