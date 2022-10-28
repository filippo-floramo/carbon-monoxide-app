import React from "react";
import ModalIndex from "../../components/Modal/ModalIndex/ModalIndex";


export default function Home(): JSX.Element {
   return (
      <>
         <div className="home">
            <h1>Hello Project</h1>
            <button>Click Me</button>
            <ModalIndex />
         </div>
      </>
   )
}