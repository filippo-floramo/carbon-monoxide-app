import { createSlice } from "@reduxjs/toolkit";
import { EmissionData } from "../../interfaces/interfaces";
import { PayloadAction } from "@reduxjs/toolkit";
import { ChartsData } from "../../interfaces/interfaces";


const initialMainChart: ChartsData = {
   value: []
}

export const mainChartSlice = createSlice({
   name: "mainChart",
   initialState: initialMainChart,
   reducers: {
      addMainChartData: (state, action: PayloadAction<EmissionData[]>) => {
         state.value = action.payload;
      },
   }
})

export const { addMainChartData } = mainChartSlice.actions;

export default mainChartSlice.reducer