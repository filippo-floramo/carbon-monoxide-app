import React from "react";
import ModalIndex from "../../components/Modal/ModalIndex/ModalIndex";
import { useAtom } from "jotai";
import { ModalOpen } from "../../atoms/atoms";

export default function Home(): JSX.Element {

   const [isModalOpen] = useAtom(ModalOpen);

   return (
      <>
         <div className="home">
            <h1>Hello Project</h1>
            <button>Click Me</button>
            {isModalOpen && <ModalIndex />}
         </div>
      </>
   )
}