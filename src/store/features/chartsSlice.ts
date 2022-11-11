import { createSlice } from "@reduxjs/toolkit";


const initialState = {
   value: []
}

export const chartsSlice = createSlice({
   name: "charts",
   initialState: initialState,
   reducers: {
      addChartsData: (state, action) => {
         
         state.value = action.payload;

         console.log(state.value)
      }
   }
})


export const { addChartsData } = chartsSlice.actions;

export default chartsSlice.reducer