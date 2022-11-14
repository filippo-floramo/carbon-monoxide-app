import axios from "axios";
import { useDispatch } from "react-redux";
import { addMainChartData } from "../store/features/chartsSlice";
import { EmissionData } from "../interfaces/interfaces"
import { sortData } from "../utils/functions";

interface ApiTypes {
   getDataByCountryCode: (code: string, begin: string, end: string) => Promise<void>,
   getDataByCoordinates: (longitude: string, latitude: string, begin: string, end: string) => Promise<void>
}


export function useEmissionApi(): ApiTypes {

   const dispatch = useDispatch();

   const getDataByCountryCode = async (code: string, begin: string, end: string) => {

      const countryCodeUrl: string = `https://api.v2.emissions-api.org/api/v2/carbonmonoxide/average.json?country=${code}&begin=${begin}&end=${end}&offset=0`

      try {
         const response = await axios.get(countryCodeUrl);

         const data: EmissionData[] = await response.data;

         dispatch(addMainChartData(data));

      } catch (error) {
         console.error(error)
      }
   }

   const getDataByCoordinates = async (longitude: string, latitude: string, begin: string, end: string) => {

      const coordinatesUrl: string = `https://api.v2.emissions-api.org/api/v2/carbonmonoxide/average.json?point=${longitude}&point=${latitude}&begin=${begin}&end=${end}&offset=0`

      try {
         const response = await axios.get(coordinatesUrl);

         const data: EmissionData[] = await response.data;

         // Data coming from coordinates has unsorted DATES, so they need to be sorted

         const sortedData = sortData(data);

         dispatch(addMainChartData(sortedData));

         console.log(sortedData);
      } catch (error) {
         console.error(error)
      }
   }

   return { getDataByCountryCode, getDataByCoordinates }
}
