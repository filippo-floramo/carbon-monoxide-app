import React from "react";
import ModalIndex from "../../components/ModalIndex/ModalIndex";


export default function Home(): JSX.Element {
   return (
      <>
         <div className="home">

            <h1>Ciao come va?</h1>
            <button>Boh dimmi te</button>
            <ModalIndex />
         </div>
      </>
   )
}