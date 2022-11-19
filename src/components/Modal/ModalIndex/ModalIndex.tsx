import React from "react";
import { useAppSelector } from "../../../store/hooks";
import { useEmissionApi } from "../../../hooks/useEmissionApi";
import { useInputHandler } from "../../../hooks/useInputHandler";
import useStateAtoms from "../../../atoms/atoms";
import ModalSelect from "../ModalSelect/ModalSelect";
import ModalTextFields from "../ModalTextFields/ModalTextFields";
import ModalDatePickers from "../ModalDatePickers/ModalDatePickers";
import ModalCloseButton from "../ModalCloseButton/ModalCloseButton";


export default function ModalIndex(): JSX.Element {

   const { handleInputs } = useInputHandler();

   const { isDataLoading } = useEmissionApi();

   const { isCountrySearch, isCompare } = useStateAtoms();

   const inputStates = useAppSelector((state) => state.input.value);


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
                        <ModalTextFields  />
                     </div>
               }
               <div className="date--range">
                  <p>Pick the date Range</p>
                  {!isCompare && <ModalDatePickers />}
               </div>
               {isDataLoading ?
                  <>Loading..</>
                  :
                  <button onClick={() => {
                     handleInputs();
                     console.log(inputStates)
                  }}>
                     Click Me
                  </button>}
            </div>
         </div>
      </>
   )
}