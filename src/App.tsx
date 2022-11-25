import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navabar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Results from "./pages/Results/Results";
import Search from "./pages/Search/Search";
import ModalIndex from "./components/Modal/ModalIndex/ModalIndex";
import useStateAtoms from "./atoms/atoms";
import "./styles/App.scss";

function App(): JSX.Element {

  const { isModalOpen } = useStateAtoms()

  return (
    <>
      <Navbar />
      {isModalOpen && <ModalIndex />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </>
  )
}

export default App;