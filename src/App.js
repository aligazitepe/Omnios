import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import BeerList from "./Components/BeerList/BeerList";
import Navbar from "./Components/Navbar/Navbar";
import Filter from "./Components/Filter";

import "./App.css";

import ApiClient from "./Services/ApiClient";

function App() {
  const [allBeers,setAllBeers]=useState({})
  const [filterType, setFilterType] = useState("");
  const [filterAmount, setFilterAmount] = useState("");
  const resetFilter = function () {
    setFilterType("");
    setFilterAmount("");
  };
  const filterFunctions = {
    resetFilter,
    setFilterType,
    setFilterAmount,
  };
  const handleChange = (filterFunction) => (event) =>
    filterFunction(event.target.value);

  useEffect(() => {
    ApiClient.getallBeers().then((res) => {
      setAllBeers(res)
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="">
          <Filter
            filterAmount={filterAmount}
            filterType={filterType}
            filterFunctions={filterFunctions}
            handleChange={handleChange}
          ></Filter>
        </div>
        <div className="col-sm-10 offset-sm-1">
          <BeerList allBeers={allBeers} filterType={filterType} filterAmount={filterAmount} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
