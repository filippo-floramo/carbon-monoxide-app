import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";

import Select from "react-select";
import ModalSelect from "../ModalSelect/ModalSelect";

import TextField from '@mui/material/TextField';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


export default function ModalIndex(): JSX.Element {

   const [value, setValue] = useState<Dayjs | null>(dayjs('2022-05-09'));


   console.log(value?.toJSON());

   return (
      <>
         <div className="backdrop">
            <div className="modal--container">

               <ModalSelect />

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