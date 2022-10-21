import React, { useState } from "react";
import { useGetEmissionProductsQuery } from "./app/services/api";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.scss";

function App(): JSX.Element {

  const { data, isLoading } = useGetEmissionProductsQuery();

  console.log(data);

  return (

    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>

  )
}

export default App;