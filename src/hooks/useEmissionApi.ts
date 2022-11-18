import { useAppDispatch } from "../store/hooks";
import { addMainChartData } from "../store/features/mainChartSlice";
import { manageData } from "../utils/functions";
import { addTotalChartData } from "../store/features/totalChartSlice";
import { EmissionData } from "../interfaces/interfaces";
import { InputTypes } from "../interfaces/interfaces";
import useStateAtoms from "../atoms/atoms";
import axios from "axios";

interface ApiTypes {
   getEmissionData: (inputStates: InputTypes) => Promise<void>
}


export function useEmissionApi(): ApiTypes {

   const { isCountrySearch } = useStateAtoms();
   const dispatch = useAppDispatch();
   const currentDate = new Date().toJSON();


   const getEmissionData = async (inputStates: InputTypes) => {

      const { countryCode, longitude, latitude, endDate, startDate } = inputStates

      let searchDatahUrl: string;
      let totalDataUrl: string;

      if (isCountrySearch) {
         searchDatahUrl = `https://api.v2.emissions-api.org/api/v2/carbonmonoxide/average.json?country=${countryCode}&begin=${startDate}&end=${endDate}&offset=0`;
         totalDataUrl = `https://api.v2.emissions-api.org/api/v2/carbonmonoxide/average.json?country=${countryCode}&begin=2019-01-01&end=${currentDate}&offset=0`
      } else {
         searchDatahUrl = `https://api.v2.emissions-api.org/api/v2/carbonmonoxide/average.json?point=${longitude}&point=${latitude}&begin=${startDate}&end=${endDate}&offset=0`;
         totalDataUrl = `https://api.v2.emissions-api.org/api/v2/carbonmonoxide/average.json?point=${longitude}&point=${latitude}&begin=2019-01-01&end=${currentDate}&offset=0`;
      }

      try {
         const mainResponse = await axios.get<EmissionData[]>(searchDatahUrl);
         const totalResponse = await axios.get<EmissionData[]>(totalDataUrl);

         const mainData = mainResponse.data;
         const totalData = totalResponse.data;

         const sortedMainData = manageData(mainData);
         const sortedTotalData = manageData(totalData);

         dispatch(addMainChartData(sortedMainData));
         dispatch(addTotalChartData(sortedTotalData));

      } catch (error) {
         console.error(error)
      }
   }

   return { getEmissionData }
}
