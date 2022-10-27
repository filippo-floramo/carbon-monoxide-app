import React from "react";
import TextField from '@mui/material/TextField';
import { addCoordinates } from "../../../store/features/modalSlice"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";


export default function ModalTextFields(): JSX.Element {

   const dispatch = useDispatch();
   const latitude = useSelector((state: RootState) => state.input.value.latitude)
   const longitude = useSelector((state: RootState) => state.input.value.longitude)

   return (
      <>
         <TextField
            id="latitude"
            placeholder="Latitude"
            size="small"
            variant="filled"
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
            value={longitude || ""}
            onChange={(e) => {
               dispatch(addCoordinates({ id: e.target.id, value: e.target.value }));

            }}
         />
      </>
   )
}