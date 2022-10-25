import React from "react";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = {
   value: {
      country: "Italy, IT",
      longitude: "",
      latitude: "",
      startDate: "",
      endDate: "",
   }
}

export const inputSlice = createSlice({
   name: "inputs",
   initialState,
   reducers: {
      addCountry: (state, action: PayloadAction<string>) => {
         state.value.country = action.payload
         console.log(state.value.country);
      },
   }
});

export const { addCountry } = inputSlice.actions

export default inputSlice.reducer