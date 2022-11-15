import { atom, SetStateAction, useAtom, } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { timeRangeOptions } from "../components/Charts/TotalDataChart/TotalDataChart";

interface Atoms {
   isModalOpen: boolean,
   setIsModalOpen: (update: SetStateAction<boolean>) => void,
   isCountrySearch: boolean | null,
   setIsCountrySearch: (update: SetStateAction<boolean | null>) => void,
   timeRange: any,
   setTimeRange: (update?: any) => void,
}

//Declaring Atoms

const modalOpen = atom<boolean>(false);

const searchType = atomWithStorage<boolean | null>('search-type', null);

const range = atomWithStorage<any>('time-range', timeRangeOptions[0]);


export default function useStateAtoms(): Atoms {

   const [isModalOpen, setIsModalOpen] = useAtom(modalOpen);

   const [isCountrySearch, setIsCountrySearch] = useAtom(searchType);

   const [timeRange, setTimeRange] = useAtom(range);

   return {
      isModalOpen,
      setIsModalOpen,
      isCountrySearch,
      setIsCountrySearch,
      timeRange,
      setTimeRange,
   }
}




