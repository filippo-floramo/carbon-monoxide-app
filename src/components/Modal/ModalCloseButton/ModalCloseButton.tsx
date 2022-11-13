import React from "react";
import { useDispatch } from "react-redux";
import { resetModalData } from "../../../store/features/modalSlice";
import useStateAtoms from "../../../atoms/atoms";

export default function ModalCloseButton(): JSX.Element {

   const dispatch = useDispatch();
   const { setIsModalOpen, setIsCountrySearch } = useStateAtoms();

   return (
      <>
         <button
            className="close--button"
            onClick={() => {
               setIsModalOpen(false);
               dispatch(resetModalData());
               setIsCountrySearch(null);
            }}
         >
            Close
         </button>
      </>
   )
}