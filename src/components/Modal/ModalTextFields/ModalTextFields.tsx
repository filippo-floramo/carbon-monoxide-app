import React from "react";
import TextField from '@mui/material/TextField';
import { addCoordinates } from "../../../store/features/modalSlice"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";


interface TextFieldProps {
   coordinatesRegExp: RegExp
}

export default function ModalTextFields({ coordinatesRegExp }: TextFieldProps): JSX.Element {

   const dispatch = useDispatch();
   const latitude = useSelector((state: RootState) => state.input.value.latitude);
   const longitude = useSelector((state: RootState) => state.input.value.longitude);

   return (
      <>
         <TextField
            id="latitude"
            placeholder="Latitude"
            size="small"
            variant="filled"
            error={latitude?.match(coordinatesRegExp) ? true : false}
            helperText={latitude?.match(coordinatesRegExp) ? "value must be a number" : " "}
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
            helperText={longitude?.match(coordinatesRegExp) ? "value must be a number" : " "}
            value={longitude || ""}
            onChange={(e) => {
               dispatch(addCoordinates({ id: e.target.id, value: e.target.value }));
            }}
         />
      </>
   )
}