import React from "react";
import useStateAtoms from "../../../atoms/atoms";
import ModalSelect from "../ModalSelect/ModalSelect";
import ModalTextFields from "../ModalTextFields/ModalTextFields";
import ModalDatePickers from "../ModalDatePickers/ModalDatePickers";
import ModalCloseButton from "../ModalCloseButton/ModalCloseButton";
import ModalSearchButton from "../ModalSearchButton/ModalSearchButton";


export default function ModalIndex(): JSX.Element {

   const { isCountrySearch } = useStateAtoms();

   return (
      <>
         <div className="backdrop">
            <div className="modal--container">
               <ModalCloseButton />
               <h1>Choose where and when.</h1>
               {
                  isCountrySearch ?

                     <div className="select">
                        <p>Country</p>
                        <ModalSelect />
                     </div>
                     :
                     <div className="coordinates">
                        <p> Coordinates</p>
                        <ModalTextFields />
                     </div>
               }
               <div className="date--range">
                  <p>Pick the date Range</p>
                  <ModalDatePickers />
               </div>
               <ModalSearchButton />
            </div>
         </div>
      </>
   )
}