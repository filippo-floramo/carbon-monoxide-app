import { createSlice } from "@reduxjs/toolkit";
import { EmissionData } from "../../interfaces/interfaces";
import { PayloadAction } from "@reduxjs/toolkit";
import { ChartsData } from "../../interfaces/interfaces";


const initialCompareMainChart: ChartsData = {
   value: []
}

export const compareMainChartSlice = createSlice({
   name: "compareMainChart",
   initialState: initialCompareMainChart,
   reducers: {
      addCompareMainChartData: (state, action: PayloadAction<EmissionData[]>) => {
         state.value = action.payload;
      },
   }
});


export const { addCompareMainChartData } = compareMainChartSlice.actions;

export default compareMainChartSlice.reducer