import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { addChartsData } from "../../../store/features/chartsSlice";
import { useAtom } from "jotai";
import { ModalOpen } from "../../../atoms/atoms";
import { useNavigate } from "react-router-dom";
import { useModalApi } from "../../../hooks/useModalApi";
import ModalSelect from "../ModalSelect/ModalSelect";
import ModalTextFields from "../ModalTextFields/ModalTextFields";
import ModalDatePickers from "../ModalDatePickers/ModalDatePickers";
import axios from "axios";



export default function ModalIndex(): JSX.Element {

   const navigate = useNavigate()

   const [, setIsModalOpen] = useAtom(ModalOpen);

   const { getDataByCountryCode } = useModalApi();

   const inputStates = useSelector((state: RootState) => state.input.value);
   const { countryCode, longitude, latitude, startDate, endDate } = inputStates;

   const handleInputs = () => {

      const dateRange = startDate && endDate;
      const areAllFalsy = Object.values(inputStates).every(value => !value);
      console.log(areAllFalsy);

      if (areAllFalsy) {
         alert("Please fill the required fields")
      } else if (countryCode && (longitude || latitude)) {
         alert("Please select between Country OR Coordinates");
      } else if (!(dateRange)) {
         alert("Please choose the date range")
      } else if (dateRange && !(countryCode || (longitude && latitude))) {
         alert("Please select and indication for the place")
      } else if (dateRange && countryCode) {

         getDataByCountryCode(countryCode, startDate, endDate)
            .then(() => {
               setIsModalOpen(false)
               navigate("/results");
            });
      } else if (dateRange && (longitude && latitude)) {
         alert("t'appostissimo");
      }
   }

   return (
      <>
         <div className="backdrop">
            <div className="modal--container">
               <h1>Choose where and when.</h1>
               <p>Select between: </p>
               <div className="select">
                  <p>Country</p>
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
                  console.log(inputStates)
               }}>
                  Click Me
               </button>
            </div>
         </div>
      </>
   )
}