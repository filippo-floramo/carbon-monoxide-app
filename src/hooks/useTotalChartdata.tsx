import React from "react";
import {
   useGetTotalDataByCountryQuery,
   useGetEmissionDataByCoordinatesQuery
} from "../store/services/api/api";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import { addTotalChartData } from "../store/features/chartsSlice";
import useStateAtoms from "../atoms/atoms";


export default function useTotalChartData() {

   const dispatch = useDispatch();
   const { totalData } = useSelector((state: RootState) => state.chart.value);
   const { countryCode, longitude, latitude } = useSelector((state: RootState) => state.input.value);

   const { skip } = useStateAtoms();

   const { data: dataByCountry, isLoading: countryLoading } = useGetTotalDataByCountryQuery(countryCode ?? skipToken);
   const { data: dataByCoordinates, isLoading: coordinatesLoading } = useGetEmissionDataByCoordinatesQuery({ longitude, latitude }, { skip })

   const loading = coordinatesLoading || countryLoading;

   if (dataByCountry) {
      dispatch(addTotalChartData(dataByCountry));
   }

   if (dataByCoordinates) {
      dispatch(addTotalChartData(dataByCoordinates));
   }

   return { totalData, loading }
}