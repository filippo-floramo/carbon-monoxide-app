import React from "react";


interface ChartContainerProps {
   children?: React.ReactNode,

};


export default function ChartContainer({ children }: ChartContainerProps): JSX.Element {

   return (
      <>
         <div className="chart--container">
            {children}
         </div>
      </>
   )
}