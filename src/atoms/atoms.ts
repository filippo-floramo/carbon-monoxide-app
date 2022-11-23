import { atom, SetStateAction, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { timeRangeOptions } from "../utils/miscellaneous";
import { TimeRangeOptions } from "../interfaces/interfaces";

interface Atoms {
   isModalOpen: boolean,
   setIsModalOpen: (update: SetStateAction<boolean>) => void,
   isCountrySearch: boolean | null,
   setIsCountrySearch: (update: SetStateAction<boolean | null>) => void,
   timeRange: TimeRangeOptions | null,
   setTimeRange: (update: SetStateAction<TimeRangeOptions | null>) => void,
}

//Declaring Atoms

const modalOpen = atom<boolean>(false);
const searchType = atomWithStorage<boolean | null>('search-type', null);
const range = atomWithStorage<TimeRangeOptions | null>('time-range', timeRangeOptions[0]);

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




