import { atom, SetStateAction, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

interface Atoms {
   isModalOpen: boolean,
   setIsModalOpen: (update: SetStateAction<boolean>) => void,
   isCountrySearch: boolean | null,
   setIsCountrySearch: (update: SetStateAction<boolean | null>) => void,
   skip: boolean,
   setSkip: (update: SetStateAction<boolean>) => void

}

//Declaring Atoms

const modalOpen = atom<boolean>(false);

const searchType = atomWithStorage<boolean | null>('search-type', null);

const skipCoordinates = atom<boolean>(true);

//Custom Hook to use atoms everywhere

export default function useStateAtoms(): Atoms {

   const [isModalOpen, setIsModalOpen] = useAtom(modalOpen);

   const [isCountrySearch, setIsCountrySearch] = useAtom(searchType);

   const [skip, setSkip] = useAtom(skipCoordinates);


   return {
      isModalOpen,
      setIsModalOpen,
      isCountrySearch,
      setIsCountrySearch,
      skip,
      setSkip
   }
}




