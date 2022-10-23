import React, { useState } from "react";
import { useGetEmissionCountriesQuery } from "../../app/services/api";

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


export default function ModalIndex(): JSX.Element {

   const [value, setValue] = useState<Dayjs | null>(dayjs('2022-05-09'));

   const { data, isLoading } = useGetEmissionCountriesQuery();

   if (isLoading) {

      return <>Ciao</>
   }

   // console.log(data)

   const managedData = data.map((item: any) => {
      return `${item.Name}, ${item.Code}`
   })


   // console.log(managedData);


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
               <div className="geo--input">
                  <TextField id="filled-basic" label="Filled" variant="filled" />
                  <TextField id="filled-basic" label="Filled" variant="filled" />
               </div>
               <div className="date--range">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                     <DatePicker
                        label="Basic example"
                        value={value}
                        onChange={(newValue) => {
                           setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                     />
                  </LocalizationProvider>

                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                     <DatePicker
                        label="Basic example"
                        value={value}
                        onChange={(newValue) => {
                           setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                     />
                  </LocalizationProvider>

               </div>
            </div>
         </div>
      </>
   )
}