import { useAppDispatch } from "../store/hooks";
import { addMainChartData } from "../store/features/mainChartSlice";
import { manageData } from "../utils/functions";
import { addTotalChartData } from "../store/features/totalChartSlice";
import { EmissionData } from "../interfaces/interfaces";
import { InputTypes } from "../interfaces/interfaces";
import axios from "axios";

interface ApiTypes {
   getDataByCountryCode: (code: string, begin: string, end: string) => Promise<void>,
   getDataByCoordinates: (longitude: string, latitude: string, begin: string, end: string) => Promise<void>
}


export function useEmissionApi(): ApiTypes {

   const dispatch = useAppDispatch();
   const currentDate = new Date().toJSON();

   const getDataByCountryCode = async (code: string, begin: string, end: string) => {

      const countryCodeUrl: string = `https://api.v2.emissions-api.org/api/v2/carbonmonoxide/average.json?country=${code}&begin=${begin}&end=${end}&offset=0`
      const totalCountryDataUrl: string = `https://api.v2.emissions-api.org/api/v2/carbonmonoxide/average.json?country=${code}&begin=2019-01-01&end=${currentDate}&offset=0`;

      try {
         const mainCountryResponse = await axios.get(countryCodeUrl);
         const totalCountryResponse = await axios.get(totalCountryDataUrl);

         const mainCountryData: EmissionData[] = await mainCountryResponse.data;
         const totalCountryData: EmissionData[] = await totalCountryResponse.data;

         const sortedMainData = manageData(mainCountryData);
         const sortedTotalData = manageData(totalCountryData);

         dispatch(addMainChartData(sortedMainData));
         dispatch(addTotalChartData(sortedTotalData));

      } catch (error) {
         console.error(error)
      }
   }

   const getDataByCoordinates = async (longitude: string, latitude: string, begin: string, end: string) => {

      const coordinatesUrl: string = `https://api.v2.emissions-api.org/api/v2/carbonmonoxide/average.json?point=${longitude}&point=${latitude}&begin=${begin}&end=${end}&offset=0`;
      const totalCoordinatesDataUrl: string = `https://api.v2.emissions-api.org/api/v2/carbonmonoxide/average.json?point=${longitude}&point=${latitude}&begin=2019-01-01&end=${currentDate}&offset=0`;

      try {
         const mainCoordinatesResponse = await axios.get(coordinatesUrl);
         const totalCoorinatesResponse = await axios.get(totalCoordinatesDataUrl);

         const mainCoordinatesData: EmissionData[] = await mainCoordinatesResponse.data;
         const totalCoordinatesData: EmissionData[] = await totalCoorinatesResponse.data;

         const mainSortedData = manageData(mainCoordinatesData);
         const totalSortedData = manageData(totalCoordinatesData);

         dispatch(addMainChartData(mainSortedData));
         dispatch(addTotalChartData(totalSortedData));
      } catch (error) {
         console.error(error)
      }
   }
   return { getDataByCountryCode, getDataByCoordinates }
}
