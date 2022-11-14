import { createSlice } from "@reduxjs/toolkit";
import { EmissionData } from "../../interfaces/interfaces";
import { PayloadAction } from "@reduxjs/toolkit";

interface ChartsData {
   value: {
      mainData: EmissionData[],
      totalData: EmissionData[]
   }
}



const initialChartsState: ChartsData = {
   value: {
      mainData: [],
      totalData: []
   }
}

export const chartsSlice = createSlice({
   name: "charts",
   initialState: initialChartsState,
   reducers: {
      addMainChartData: (state, action: PayloadAction<EmissionData[]>) => {

         state.value.mainData = action.payload;

         console.log(state.value)
      },
      addTotalChartData: (state, action: PayloadAction<EmissionData[]>) => {

         state.value.totalData = action.payload
      }
   }
})

export const { addMainChartData, addTotalChartData } = chartsSlice.actions;

export default chartsSlice.reducer