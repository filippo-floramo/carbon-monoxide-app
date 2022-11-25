import useStateAtoms from "../../atoms/atoms";


export default function Search(): JSX.Element {

   const { setIsCountrySearch, setIsModalOpen } = useStateAtoms();


   return (
      <div className="search">
         <h1 className="search--cta">Search by:</h1>
         <div className="search--buttons">
            <button className="search--btn country--btn" onClick={() => { setIsCountrySearch(true); setIsModalOpen(true); }}>Country</button>
            <p>or</p>
            <button className="search--btn coordinates--btn" onClick={() => { setIsCountrySearch(false); setIsModalOpen(true); }}>Coordinates</button>
         </div>
      </div>
   )
}