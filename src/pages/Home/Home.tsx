import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home(): JSX.Element {

   const navigate = useNavigate();

   return (
      <>
         <div className="home">
            <h1>Hello Project</h1>
            <div className="search--buttons">
               <button onClick={() => navigate("/search")}>Search</button>
            </div>
         </div>
      </>
   )
}