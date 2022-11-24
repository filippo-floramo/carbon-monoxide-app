import { useEmissionApi } from "../../../hooks/useEmissionApi";
import { useInputHandler } from "../../../hooks/useInputHandler";
import { useAppSelector } from "../../../store/hooks";




export default function ModalSearchButton(): JSX.Element {

   const { isDataLoading } = useEmissionApi();
   const { handleInputs } = useInputHandler();
   const allvalues = useAppSelector((state) => state.input.value)

   return (
      <>
         {
            isDataLoading ?
               <>Loading..</>
               :
               <button onClick={() => {
                  handleInputs();
                  console.table(allvalues)
               }}>
                  Click Me
               </button>
         }
      </>
   )
}