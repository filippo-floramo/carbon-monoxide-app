import React, { useState } from "react";
import { useGetEmissionCountriesQuery } from "../../app/services/api/api";
import { useDispatch, useSelector } from "react-redux";
import { addCountry } from "../../app/features/inputSlice";
import { RootState } from "../../app/store";

import Select from "react-select"

import TextField from '@mui/material/TextField';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


export default function ModalIndex(): JSX.Element {

   const [value, setValue] = useState<Dayjs | null>(dayjs('2022-05-09'));

   const country = useSelector((state: RootState) => state.input.value.country);
   const dispatch = useDispatch();
   const { data, isLoading } = useGetEmissionCountriesQuery();

   if (isLoading) {

      return <>Ciao</>
   }


   const managedData = data.map((item: any) => {
      return { label: `${item.Name}, ${item.Code} `, value: item.Code }
   })

   console.log(value?.toJSON());

   return (
      <>
         <div className="backdrop">
            <div className="modal--container">
               <Select
                  classNamePrefix="select"
                  className="country--select"
                  defaultValue={managedData[0]}
                  onChange={(value: { label: string }) => dispatch(addCountry(value.label))}
                  name="country"
                  isSearchable={true}
                  options={managedData}
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