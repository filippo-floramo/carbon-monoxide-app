import React from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useGetEmissionCountriesQuery } from "../../app/services/api";
import { count } from "console";

export default function ModalIndex(): JSX.Element {



   const { data, isLoading } = useGetEmissionCountriesQuery();

   if (isLoading) {

      return <>Ciao</>
   }

   console.log(data)

   const managedData = data.map((item: any) => {
      return `${item.Name}, ${item.Code}`
   })


   console.log(managedData);


   return (
      <>
         <div className="backdrop">
            <div className="modal--container">
               <Autocomplete
                  className="autocomplete"
                  size="medium"
                  disablePortal
                  id="combo-box-demo"
                  options={managedData}
                  sx={{ width: 200, }}
                  renderInput={(params) => <TextField {...params} label="State" />}
               />
            </div>
         </div>
      </>
   )
}