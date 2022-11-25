import React from "react";
import { useNavigate } from "react-router-dom";


export default function FloatingSearchButton() {

   const navigate = useNavigate();

   return (
      <>
         <button
            className="float--button"
            onClick={() => navigate('/search')}

         >
            Search
         </button>
      </>
   )
}
