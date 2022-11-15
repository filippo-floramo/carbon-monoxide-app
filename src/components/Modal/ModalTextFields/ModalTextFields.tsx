import React from "react";
import TextField from '@mui/material/TextField';
import { addCoordinates } from "../../../store/features/modalSlice"
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { RootState } from "../../../store/store";


interface TextFieldProps {
   coordinatesRegExp: RegExp
}

export default function ModalTextFields({ coordinatesRegExp }: TextFieldProps): JSX.Element {

   const dispatch = useAppDispatch();

   const { latitude, longitude } = useAppSelector((state: RootState) => state.input.value);

   return (
      <>
         <TextField
            id="latitude"
            placeholder="Latitude"
            size="small"
            variant="filled"
            error={latitude?.match(coordinatesRegExp) ? true : false}
            helperText={latitude?.match(coordinatesRegExp) ? "Value must be a number." : " "}
            value={latitude || ""}
            onChange={(e) => {
               dispatch(addCoordinates({ id: e.target.id, value: e.target.value }));
            }}
         />
         <TextField
            id="longitude"
            placeholder="Longitude"
            size="small"
            variant="filled"
            error={longitude?.match(coordinatesRegExp) ? true : false}
            helperText={longitude?.match(coordinatesRegExp) ? "Value must be a number." : " "}
            value={longitude || ""}
            onChange={(e) => {
               dispatch(addCoordinates({ id: e.target.id, value: e.target.value }));
            }}
         />
      </>
   )
}