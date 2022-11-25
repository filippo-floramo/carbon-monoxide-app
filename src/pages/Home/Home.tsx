import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home(): JSX.Element {

   const navigate = useNavigate();

   return (
      <>
         <div className="home">
            <div className="home--text">
               <h1>This is the app</h1>
               <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, provident adipisci veritatis omnis doloribus a! Ex reprehenderit quasi optio. Ullam?
               </p>
            </div>
            <div className="home--buttons">
               <button className="home--btn search--btn" onClick={() => navigate("/search")}>Search</button>
               <button className="home--btn about--btn" onClick={() => navigate("/about")}>About</button>
            </div>
         </div>
      </>
   )
}