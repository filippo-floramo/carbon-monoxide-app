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
      getCountryCode: (state, action: PayloadAction<string>) => {

         let countryCode = action.payload.match(/[A-Z]+/g)?.pop();

         state.value.country = countryCode ? countryCode : "";

         console.log(state.value.country);
         console.log(countryCode);
      },
   }
});

export const { getCountryCode } = inputSlice.actions

export default inputSlice.reducer