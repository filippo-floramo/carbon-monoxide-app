import axios from "axios";
import { useDispatch } from "react-redux";
import { addChartsData } from "../store/features/chartsSlice";


interface ApiTypes {
   getDataByCountryCode: (code: string, begin: string, end: string) => Promise<void>,
   getDataByCoordinates: (longitude: string, latitude: string, begin: string, end: string) => Promise<void>
}

interface EmissionData {
   average: number,
   end: string,
   start: string
}

export function useModalApi(): ApiTypes {

   const dispatch = useDispatch();


   const getDataByCountryCode = async (code: string, begin: string, end: string) => {

      const countryCodeApi: string = `https://api.v2.emissions-api.org/api/v2/carbonmonoxide/average.json?country=${code}&begin=${begin}&end=${end}&offset=0`

      try {

         const response = await axios.get(countryCodeApi);

         const data: EmissionData[] = await response.data;

         dispatch(addChartsData(data));

      } catch (error) {
         console.error(error)
      }
   }


   const getDataByCoordinates = async (longitude: string, latitude: string, begin: string, end: string) => {

      const coordinatesApi: string = `https://api.v2.emissions-api.org/api/v2/carbonmonoxide/average.json?point=${longitude}&point=${latitude}&begin=${begin}&end=${end}&offset=0`

      try {
         const response = await axios.get(coordinatesApi);

         const data: EmissionData[] = await response.data;

         // Data coming from coordinates has unsorted DATES, so they need to be sorted

         const sortedData = data.sort((a, b): number => {

            let first = a.start.match(/[0-9]+/g)?.join('');
            let second = b.start.match(/[0-9]+/g)?.join('');

            return Number(first) - Number(second)
         });

         dispatch(addChartsData(sortedData));

         console.log(sortedData);
      } catch (error) {
         console.error(error)
      }
   }

   return { getDataByCountryCode, getDataByCoordinates }
}
