import useStateAtoms from "../../atoms/atoms";


export default function Search(): JSX.Element {

   const { setIsCountrySearch, setIsModalOpen } = useStateAtoms();


   return (
      <div className="search">
         <div className="search--buttons">
            <button onClick={() => { setIsCountrySearch(true); setIsModalOpen(true); }}>Search by Country</button>
            <button onClick={() => { setIsCountrySearch(false); setIsModalOpen(true); }}>Search by Coordinates</button>
         </div>
      </div>
   )
}