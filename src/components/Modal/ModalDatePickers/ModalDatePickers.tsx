import React from "react";
import TextField from '@mui/material/TextField';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import type { } from '@mui/x-date-pickers/themeAugmentation';
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { addEndDate, addStartDate } from "../../../store/features/modalSlice";


type DateTypes = Dayjs | null


export default function ModalDatePickers(): JSX.Element {

   const { startDate, endDate } = useAppSelector((state) => state.input.value)

   const dispatch = useAppDispatch();

   return (
      <div className="date--range">
         <p>Pick the date Range</p>

         <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
               label="Start Date"
               value={startDate ? startDate : null}
               onChange={(newValue: DateTypes) => {
                  if (newValue) dispatch(addStartDate(newValue.toJSON()))
               }}
               renderInput={(params) => <TextField {...params} />}
            />
         </LocalizationProvider>

         <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
               label="End Date"
               value={endDate ? endDate : null}
               onChange={(newValue: DateTypes) => {
                  if (newValue) dispatch(addEndDate(newValue.toJSON()))
               }}
               renderInput={(params) => <TextField {...params} />}
            />
         </LocalizationProvider>
      </div>
   )
}