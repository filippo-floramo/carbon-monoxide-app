import { createSlice } from "@reduxjs/toolkit";
import { EmissionData } from "../../interfaces/interfaces";
import { PayloadAction } from "@reduxjs/toolkit";
import { ChartsData } from "../../interfaces/interfaces";

const initialTotalChart: ChartsData = {
   value: []
}

export const totalChartSlice = createSlice({
   name: "totalChart",
   initialState: initialTotalChart,
   reducers: {
      addTotalChartData: (state, action: PayloadAction<EmissionData[]>) => {
         state.value = action.payload
      }
   }
})

export const { addTotalChartData } = totalChartSlice.actions;

export default totalChartSlice.reducer