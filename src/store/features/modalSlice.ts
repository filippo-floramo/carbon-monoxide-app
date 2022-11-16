import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InputTypes } from "../../interfaces/interfaces";


interface ModalTypes {
   value: InputTypes
}

const initialModal: ModalTypes = {
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
   initialState: initialModal,
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
      },

      resetModalData: (state) => {
         state.value = {
            countryCode: undefined,
            longitude: undefined,
            latitude: undefined,
            startDate: undefined,
            endDate: undefined,
         }

         console.log(state.value)
      }
   }
});

export const { addCountryCode, addCoordinates, addEndDate, addStartDate, resetModalData } = modalSlice.actions

export default modalSlice.reducer