import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAllBeers, filterBeers } from "./redux/beer/beerSlice";

import BeerList from "./Components/BeerList/BeerList";
import Navbar from "./Components/Navbar/Navbar";
import Filter from "./Components/Filter";

import "./App.css";

import ApiClient from "./Services/ApiClient";

function App() {
  const [filterType, setFilterType] = useState("");
  const [filterAmount, setfilterAmount] = useState("0");
  const dispatch = useDispatch();
  const handleChange = (option) => (event) => {
    if (option === "type") {
      setFilterType(event.target.value);
    } else if (option === "amount") {
      setfilterAmount(event.target.value);
    }
  };
  const setFilter = (e) => {
    dispatch(filterBeers({ filterType, filterAmount }));
  };
  const resetFilter = (e) => {
    dispatch(filterBeers());
  };
  useEffect(() => {
    ApiClient.getallBeers().then((res) => {
      dispatch(setAllBeers(res));
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="">
          <Filter
            resetFilter={resetFilter}
            setFilter={setFilter}
            handleChange={handleChange}
          ></Filter>
        </div>
        <div className="col-sm-10 offset-sm-1">
          <BeerList />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
