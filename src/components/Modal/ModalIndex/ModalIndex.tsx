import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import ModalSelect from "../ModalSelect/ModalSelect";
import ModalTextFields from "../ModalTextFields/ModalTextFields";
import ModalDatePickers from "../ModalDatePickers/ModalDatePickers";


export default function ModalIndex(): JSX.Element {


   const inputStates = useSelector((state: RootState) => state.input.value);
   const { countryCode, longitude, latitude, startDate, endDate } = inputStates


   const handleInputs = () => {
      if (countryCode && (longitude || latitude)) {
         alert("select between one of these");
      }
   }

   return (
      <>
         <div className="backdrop">
            <div className="modal--container">
               <h1>Choose where and when.</h1>
               <p>Select between: </p>
               <div className="select">
                  <p>State</p>
                  <ModalSelect />
               </div>
               <p>Or</p>
               <div className="coordinates">
                  <p> Coordinates</p>
                  <ModalTextFields />
               </div>
               <div className="date--range">
                  <p>Pick the date Range</p>
                  <ModalDatePickers />
               </div>
               <button onClick={() => {
                  handleInputs();
               }}>Click Me</button>
            </div>
         </div>
      </>
   )
}