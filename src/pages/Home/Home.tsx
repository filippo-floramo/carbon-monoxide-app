import React from "react";
import ModalIndex from "../../components/Modal/ModalIndex/ModalIndex";
import useStateAtoms from "../../atoms/atoms";

export default function Home(): JSX.Element {

   const { isModalOpen, setIsCountrySearch, setIsModalOpen, setIsCompare } = useStateAtoms();

   return (
      <>
         <div className="home">
            <h1>Hello Project</h1>
            <div className="search--buttons">
               <button onClick={() => { setIsCountrySearch(true); setIsModalOpen(true); setIsCompare(false) }}>Search by Country</button>
               <button onClick={() => { setIsCountrySearch(false); setIsModalOpen(true); setIsCompare(false) }}>Search by Coordinates</button>
            </div>
         </div>
      </>
   )
}