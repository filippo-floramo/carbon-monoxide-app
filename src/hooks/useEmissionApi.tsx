import axios from "axios";
import { useDispatch } from "react-redux";
import { addMainChartData, addTotalChartData } from "../store/features/chartsSlice";
import { EmissionData } from "../interfaces/interfaces"
import { sortData } from "../utils/functions";

interface ApiTypes {
   getDataByCountryCode: (code: string, begin: string, end: string) => Promise<void>,
   getDataByCoordinates: (longitude: string, latitude: string, begin: string, end: string) => Promise<void>
}


export function useEmissionApi(): any {

   const dispatch = useDispatch();
   const currentDate = new Date().toJSON();


   const getDataByCountryCode = async (code: string, begin: string, end: string) => {

      const countryCodeUrl: string = `https://api.v2.emissions-api.org/api/v2/carbonmonoxide/average.json?country=${code}&begin=${begin}&end=${end}&offset=0`
      const totalCountryDataUrl: string = `https://api.v2.emissions-api.org/api/v2/carbonmonoxide/average.json?country=${code}&begin=2019-01-01&end=${currentDate}&offset=0`;

      try {
         const mainCountryResponse = await axios.get(countryCodeUrl);
         const totalCountryResponse = await axios.get(totalCountryDataUrl);

         const mainCountryData = await mainCountryResponse.data;
         const totalCountryData = await totalCountryResponse.data;

         const sortedMainData = sortData(mainCountryData);
         const sortedTotalData = sortData(totalCountryData);

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

         const mainCoordinatesData = await mainCoordinatesResponse.data;
         const totalCoordinatesData = await totalCoorinatesResponse.data;

         const mainSortedData = sortData(mainCoordinatesData);
         const totalSortedData = sortData(totalCoordinatesData);

         dispatch(addMainChartData(mainSortedData));
         dispatch(addTotalChartData(totalSortedData));

      } catch (error) {
         console.error(error)
      }
   }

   /*fetching data to show the whole data range provided, they all come unsorted so they need to be sorted as well */

   // these two functions need two abstracted into one



   const fetchTotalDataByCoordinates = (longitude: string, latitude: string) => {
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
