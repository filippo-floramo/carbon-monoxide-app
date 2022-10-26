import React, { useState } from "react";

import ModalSelect from "../ModalSelect/ModalSelect";
import ModalTextFields from "../ModalTextFields/ModalTextFields";
import ModalDatePickers from "../ModalDatePickers/ModalDatePickers";



export default function ModalIndex(): JSX.Element {


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
            </div>
         </div>
      </>
   )
}