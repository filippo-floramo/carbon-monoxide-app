import React, { useState } from "react";
import { useGetEmissionCountriesQuery} from "./app/services/api/api";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.scss";

function App(): JSX.Element {


  return (

    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>

  )
}

export default App;