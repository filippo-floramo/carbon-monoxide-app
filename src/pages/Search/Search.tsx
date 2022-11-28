import useStateAtoms from "../../atoms/atoms";
import ModalIndex from "../../components/Modal/ModalIndex/ModalIndex";

export default function Search(): JSX.Element {

   const { setIsCountrySearch, setIsModalOpen, isModalOpen } = useStateAtoms();


   return (
      <>
         {isModalOpen && <ModalIndex />}
         <div className="search">
            <h1 className="search--cta">Search by:</h1>
            <div className="search--buttons">
               <button className="search--btn country--btn" onClick={() => { setIsCountrySearch(true); setIsModalOpen(true); }}>Country</button>
               <p>or</p>
               <button className="search--btn coordinates--btn" onClick={() => { setIsCountrySearch(false); setIsModalOpen(true); }}>Coordinates</button>
            </div>
         </div>
      </>
   )
}