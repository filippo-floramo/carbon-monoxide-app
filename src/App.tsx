import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Results from "./pages/Results/Results";
import "./App.scss";

function App(): JSX.Element {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/results" element={<Results />} />
    </Routes>
  )
}

export default App;