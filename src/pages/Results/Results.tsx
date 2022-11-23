import React from "react";
import MainChart from "../../components/Charts/MainChart";
import TotalDataChart from "../../components/Charts/TotalDataChart/TotalDataChart";



export default function Results(): JSX.Element {


   return (
      <>
         <div className="results">
            <MainChart />
            <TotalDataChart />
         </div>
      </>
   )
}