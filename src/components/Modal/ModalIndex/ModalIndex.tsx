import React from "react";
import { useAppSelector } from "../../../store/hooks";
import { useNavigate } from "react-router-dom";
import { useEmissionApi } from "../../../hooks/useEmissionApi";
import useStateAtoms from "../../../atoms/atoms";
import ModalSelect from "../ModalSelect/ModalSelect";
import ModalTextFields from "../ModalTextFields/ModalTextFields";
import ModalDatePickers from "../ModalDatePickers/ModalDatePickers";
import ModalCloseButton from "../ModalCloseButton/ModalCloseButton";


const coordinatesRegExp: RegExp = /[a-z]+/ig;

export default function ModalIndex(): JSX.Element {

   const { getEmissionData } = useEmissionApi();

   const navigate = useNavigate();

   const { setIsModalOpen, isCountrySearch } = useStateAtoms();

   const inputStates = useAppSelector((state) => state.input.value);
   const {
      countryCode,
      longitude,
      latitude,
      startDate,
      endDate
   } = inputStates;

   const handleInputs = () => {

      const dateRange = startDate && endDate;
      const areAllFalsy = Object.values(inputStates).every(value => !value);
      console.log(areAllFalsy);

      if (areAllFalsy) {
         alert("Please fill the required fields")
      } else if (!(dateRange)) {
         alert("Please choose the date range")
      } else if (dateRange && !(countryCode || (longitude && latitude))) {
         alert("Please select and indication for the place")
      } else if (dateRange && countryCode) {

         getEmissionData(inputStates)
            .then(() => {
               setIsModalOpen(false)
               navigate("/results");
            });
      } else if (dateRange && (longitude && latitude)) {

         const latitudeIsNotValid = coordinatesRegExp.test(latitude);
         const longitudeIsNotValid = coordinatesRegExp.test(longitude);

         switch (longitudeIsNotValid || latitudeIsNotValid) {
            case true:
               alert("Values in the coordinate fields must be numbers");
               break;
            case false:
               getEmissionData(inputStates)
                  .then(() => {
                     setIsModalOpen(false)
                     navigate("/results");
                  });
               break;
         }
      }
   }

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
                        <ModalTextFields coordinatesRegExp={coordinatesRegExp} />
                     </div>
               }
               <div className="date--range">
                  <p>Pick the date Range</p>
                  <ModalDatePickers />
               </div>
               <button onClick={() => {
                  handleInputs();
                  console.log(inputStates)
               }}>
                  Click Me
               </button>
            </div>
         </div>
      </>
   )
}