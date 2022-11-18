import React from "react";
import MainChart from "../../components/Charts/MainChart";
import TotalDataChart from "../../components/Charts/TotalDataChart/TotalDataChart";
import CompareMainChart from "../../components/Charts/CompareMainChart/CompareMainChart";
import CompareTotalChart from "../../components/Charts/CompareTotalChart/CompareTotalChart";
import useStateAtoms from "../../atoms/atoms";



export default function Results(): JSX.Element {

   const { setIsCompare, showCompareCharts, setIsModalOpen } = useStateAtoms();

   return (
      <>
         <div className="results">
            <button className="compare"
               onClick={() => {
                  setIsCompare(true);
                  setIsModalOpen(true);
               }}
            >
               Compare
            </button>
            {showCompareCharts && <CompareMainChart />}
            <MainChart />
            <TotalDataChart />
            {showCompareCharts && <CompareTotalChart />}
         </div>
      </>
   )
}