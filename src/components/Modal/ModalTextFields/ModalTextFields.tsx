import React from "react";
import TextField from '@mui/material/TextField';



export default function ModalTextFields(): JSX.Element {
   return (
      <>
         <TextField id="latidute" size="small" placeholder="Latitude" variant="filled" />
         <TextField id="longitude" onChange={e => console.log(e.target.value)} variant="filled" size="small" placeholder="Longitude" />
      </>
   )
}