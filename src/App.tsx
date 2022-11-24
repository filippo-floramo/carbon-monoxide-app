import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Results from "./pages/Results/Results";
import Search from "./pages/Search/Search";
import ModalIndex from "./components/Modal/ModalIndex/ModalIndex";
import useStateAtoms from "./atoms/atoms";
import "./styles/App.scss";

function App(): JSX.Element {

  const { isModalOpen } = useStateAtoms()

  return (
    <>
      {isModalOpen && <ModalIndex />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  )
}

export default App;