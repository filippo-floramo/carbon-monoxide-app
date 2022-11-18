import { createSlice } from "@reduxjs/toolkit";
import { EmissionData } from "../../interfaces/interfaces";
import { PayloadAction } from "@reduxjs/toolkit";
import { ChartsData } from "../../interfaces/interfaces";


const initialCompareTotalChart: ChartsData = {
   value: []
}

export const compareTotalChartSlice = createSlice({
   name: "compareTotalChart",
   initialState: initialCompareTotalChart,
   reducers: {
      addCompareTotalChartData: (state, action: PayloadAction<EmissionData[]>) => {
         state.value = action.payload;
      },
   }
});


export const { addCompareTotalChartData } = compareTotalChartSlice.actions;

export default compareTotalChartSlice.reducer