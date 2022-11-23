import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Results from "./pages/Results/Results";
import "./styles/App.scss";
import ModalIndex from "./components/Modal/ModalIndex/ModalIndex";
import useStateAtoms from "./atoms/atoms";

function App(): JSX.Element {

  const { isModalOpen } = useStateAtoms()

  return (
    <>
      {isModalOpen && <ModalIndex />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </>
  )
}

export default App;