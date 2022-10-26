import React, { useState } from "react";

import TextField from '@mui/material/TextField';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import type { } from '@mui/x-date-pickers/themeAugmentation';






export default function ModalDatePickers(): JSX.Element {

   const [value, setValue] = useState<Dayjs | null>(dayjs('2022-05-09'));

   


   return (
      <>
         <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
            className="lollo"
               label="Start Date"
               value={value}
               onChange={(newValue) => {
                  setValue(newValue);
               }}
               renderInput={(params) => <TextField {...params} />}
            />
         </LocalizationProvider>

         <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
               label="End Date"
               value={value}
               onChange={(newValue) => {
                  setValue(newValue);
               }}
               renderInput={(params) => <TextField {...params} />}
            />
         </LocalizationProvider>
      </>
   )
}