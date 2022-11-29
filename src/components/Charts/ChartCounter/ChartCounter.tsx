import React from "react";
import { EmissionData } from "../../../interfaces/interfaces"

interface ChartCounterProps {
   data: EmissionData[]
}




export default function ChartCounter({ data }: ChartCounterProps) {

   const mean = data.reduce((sum, currItem) => { return (sum + currItem.average) }, 0) / data.length;

   const floated = mean * 100;
   return (
      <>
         <div>{`average result is: ${floated.toFixed(2)} * 10-2`}</div>
      </>
   )
}