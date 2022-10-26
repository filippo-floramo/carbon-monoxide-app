import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
   value: {
      country: "",
      coordinates: {
         longitude: "",
         latitude: "",
      },
      startDate: "",
      endDate: "",
   }
}

export const modalSlice = createSlice({
   name: "inputs",
   initialState,
   reducers: {
      addCountryCode: (state, action: PayloadAction<string>) => {

         let countryCode = action.payload.match(/[A-Z]+/g)?.pop();

         state.value.country = countryCode ? countryCode : "";

         console.log(state.value.country);
         console.log(countryCode);
      },
   }
});

export const { addCountryCode } = modalSlice.actions

export default modalSlice.reducer