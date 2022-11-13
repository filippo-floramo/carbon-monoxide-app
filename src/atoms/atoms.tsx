import { atom, useAtom } from "jotai";



//Declaring Atoms

const modalOpen = atom<boolean>(false);

const searchType = atom<boolean | null>(null);

//Custom Hook to use atoms everywhere

export default function useStateAtoms() {

   const [isModalOpen, setIsModalOpen] = useAtom(modalOpen);

   const [isCountrySearch, setIsCountrySearch] = useAtom(searchType)

   return {
      isModalOpen,
      setIsModalOpen,
      isCountrySearch,
      setIsCountrySearch
   }
}




