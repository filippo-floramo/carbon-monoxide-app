import { useAppSelector } from "../store/hooks";
import { useNavigate } from "react-router-dom";
import { useEmissionApi } from "../hooks/useEmissionApi";
import { coordinatesRegExp } from "../utils/miscellaneous";
import useStateAtoms from "../atoms/atoms";



export function useInputHandler() {


   const navigate = useNavigate();

   const { getEmissionData } = useEmissionApi();

   const { setIsModalOpen, isCompare, setShowCompareCharts } = useStateAtoms();

   const inputStates = useAppSelector((state) => state.input.value);
   const {
      countryCode,
      longitude,
      latitude,
      startDate,
      endDate
   } = inputStates;

   const dateRange = startDate && endDate;
   const areAllFalsy = Object.values(inputStates).every(value => !value);


   const handleInputs = () => {


      if (areAllFalsy) {
         alert("Please fill the required fields")
      } else if (!(dateRange)) {
         alert("Please choose the date range")
      } else if (dateRange && !(countryCode || (longitude && latitude))) {
         alert("Please select and indication for the place")
      } else if (dateRange && countryCode) {

         getEmissionData()
            .then(() => {
               setIsModalOpen(false)
               if (isCompare) { setShowCompareCharts(true) }
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
               getEmissionData()
                  .then(() => {
                     setIsModalOpen(false);
                     if (isCompare) { setShowCompareCharts(true) }
                     navigate("/results");
                  });
               break;
         }
      }

   }


   return { handleInputs }
}