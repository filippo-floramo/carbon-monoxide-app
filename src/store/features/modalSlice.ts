import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InputTypes {
   value: {
      countryCode: string | undefined;
      longitude: string | undefined
      latitude: string | undefined
      startDate: string | undefined;
      endDate: string | undefined;
   }
}


const initialState: InputTypes = {
   value: {
      countryCode: undefined,
      longitude: undefined,
      latitude: undefined,
      startDate: undefined,
      endDate: undefined,
   }
}

export const modalSlice = createSlice({
   name: "inputs",
   initialState,
   reducers: {
      addCountryCode: (state, action: PayloadAction<string | undefined>) => {
         state.value.countryCode = action.payload
         console.log(state.value.countryCode);
      },

      addCoordinates: (state, action: PayloadAction<{ id: string, value: string }>) => {
         
         switch (action.payload.id) {
            case "longitude":
               state.value.longitude = action.payload.value
               break;
            case "latitude":
               state.value.latitude = action.payload.value
               break;
            default:
               console.log("Input field not found");
         };

         console.log(state.value.latitude);
         console.log(state.value.longitude);
      },
      addStartDate: (state, action: PayloadAction<string>) => {
         state.value.startDate = action.payload
      },
      addEndDate: (state, action: PayloadAction<string>) => {
         state.value.endDate = action.payload
      }
   }
});

export const { addCountryCode, addCoordinates, addEndDate, addStartDate } = modalSlice.actions

export default modalSlice.reducer