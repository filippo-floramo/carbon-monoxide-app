import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addMainChartData } from "../store/features/mainChartSlice";
import { manageData } from "../utils/functions";
import { addTotalChartData } from "../store/features/totalChartSlice";
import { EmissionData } from "../interfaces/interfaces";
import { atom, useAtom } from "jotai";
import useStateAtoms from "../atoms/atoms";
import axios from "axios";

interface ApiTypes {
   getEmissionData: () => Promise<void>,
   isDataLoading: boolean
}

const DataLoading = atom<boolean>(false);

export function useEmissionApi(): ApiTypes {

   const currentDate = new Date().toJSON();

   const dispatch = useAppDispatch();

   const { isCountrySearch } = useStateAtoms();
   const [isDataLoading, setIsDataLoading] = useAtom(DataLoading);

   const { countryCode, longitude, latitude, endDate, startDate } = useAppSelector((state) => state.input.value)


   const getEmissionData = async () => {

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
         setIsDataLoading(true);

         const mainResponse = await axios.get<EmissionData[]>(searchDatahUrl);
         const totalResponse = await axios.get<EmissionData[]>(totalDataUrl);

         const mainData = mainResponse.data;
         const totalData = totalResponse.data;

         const sortedMainData = manageData(mainData);
         const sortedTotalData = manageData(totalData);

         dispatch(addMainChartData(sortedMainData));
         dispatch(addTotalChartData(sortedTotalData));

         setIsDataLoading(false);
      } catch (error) {
         console.error(error);
         setIsDataLoading(false);
      }
   }

   return { getEmissionData, isDataLoading }
}
