import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addChartsData } from "../store/features/chartsSlice";



export function useModalApi() {

   const dispatch = useDispatch();

   const getDataByCountryCode = async (code: string, begin: string, end: string) => {
      try {
         const response = await axios.get(`https://api.v2.emissions-api.org/api/v2/carbonmonoxide/average.json?country=${code}&begin=${begin}&end=${end}&offset=0`);
         const data = await response.data;
         dispatch(addChartsData(data));

      } catch (error) {
         console.error(error)
      }
   }

   // the response must be sorted INSIDE the function, not on the reducer, keep the reducer  action as simple as possible

   const getDataByCoordinates = async (longitude: string, latitude: string, begin: string, end: string) => {
      try {
         const response = await axios.get('');

         const data = await response.data;
         console.log(data);

         //here goes the Sort

         //here goes the dispatch to the store

      } catch (error) {

         console.error(error)
      }
   }

   return { getDataByCountryCode, getDataByCoordinates }
}
