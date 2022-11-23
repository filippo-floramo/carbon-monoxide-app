import React from "react";
import { addCoordinates } from "../../../store/features/modalSlice"
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { coordinatesRegExp } from "../../../utils/miscellaneous";
import TextField from '@mui/material/TextField';



export default function ModalTextFields(): JSX.Element {

   const dispatch = useAppDispatch();

   const { latitude, longitude } = useAppSelector((state) => state.input.value);

   return (
      <div className="coordinates">

         <p> Coordinates</p>

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
      </div>
   )
}