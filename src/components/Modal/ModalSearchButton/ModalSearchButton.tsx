import { useEmissionApi } from "../../../hooks/useEmissionApi";
import { useInputHandler } from "../../../hooks/useInputHandler";

export const lol = "l";





export default function ModalSearchButton() {

   const { isDataLoading } = useEmissionApi();
   const { handleInputs } = useInputHandler();
   return (
      <>
         {
            isDataLoading ?
               <>Loading..</>
               :
               <button onClick={() => {
                  handleInputs();
               }}>
                  Click Me
               </button>
         }
      </>
   )
}