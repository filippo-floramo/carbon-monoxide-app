import axios from "axios";
import { useDispatch } from "react-redux";
import { addMainChartData, addTotalChartData } from "../store/features/chartsSlice";
import { EmissionData } from "../interfaces/interfaces"
import { sortData } from "../utils/functions";

interface ApiTypes {
   getDataByCountryCode: (code: string, begin: string, end: string) => Promise<void>,
   getDataByCoordinates: (longitude: string, latitude: string, begin: string, end: string) => Promise<void>
}


export function useEmissionApi(): ApiTypes {

   const dispatch = useDispatch();
   const currentDate = new Date().toJSON();


   const getDataByCountryCode = async (code: string, begin: string, end: string) => {

      const countryCodeUrl: string = `https://api.v2.emissions-api.org/api/v2/carbonmonoxide/average.json?country=${code}&begin=${begin}&end=${end}&offset=0`

      try {
         const response = await axios.get(countryCodeUrl);

         const data: EmissionData[] = await response.data;

         dispatch(addMainChartData(data));
         fetchTotalDataByCountry(code);

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
         fetchTotalDataByCoordinates(longitude, latitude);
         console.log(sortedData);
      } catch (error) {
         console.error(error)
      }
   }

   /*fetching data to show the whole data range provided, they all come unsorted so they need to be sorted as well */

   const fetchTotalDataByCountry = async (countryCode: string) => {
      const DataUrl = `https://api.v2.emissions-api.org/api/v2/carbonmonoxide/average.json?country=${countryCode}&begin=2019-01-01&end=${currentDate}&offset=0`;

      try {
         axios.get(DataUrl)
            .then(res => {
               const data: EmissionData[] = sortData(res.data);
               dispatch(addTotalChartData(data));
            });
      } catch (error) {
         console.error(error);
      }
   }

   const fetchTotalDataByCoordinates = async (longitude: string, latitude: string) => {
      const DataUrl = `https://api.v2.emissions-api.org/api/v2/carbonmonoxide/average.json?point=${longitude}&point=${latitude}&begin=2019-01-01&end=${currentDate}&offset=0`;

      try {
         axios.get(DataUrl)
            .then(res => {
               const data: EmissionData[] = sortData(res.data);
               dispatch(addTotalChartData(data));
            });
      } catch (error) {
         console.error(error);
      }
   }



   return { getDataByCountryCode, getDataByCoordinates }
}
