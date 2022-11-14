import { createSlice } from "@reduxjs/toolkit";
import { EmissionData } from "../../interfaces/interfaces";
import { PayloadAction } from "@reduxjs/toolkit";

interface ChartsData {
   value: EmissionData[]
}

const initialChartsState: ChartsData = {
   value: []
}

export const mainChartSlice = createSlice({
   name: "mainChart",
   initialState: initialChartsState,
   reducers: {
      addMainChartData: (state, action: PayloadAction<EmissionData[]>) => {
         state.value = action.payload;
      },
   }
})

export const { addMainChartData } = mainChartSlice.actions;

export default mainChartSlice.reducer