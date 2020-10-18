import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAllBeers, filterBeers } from "./redux/beer/beerSlice";

import BeerList from "./Components/BeerList/BeerList";
import Navbar from "./Components/Navbar/Navbar";

import "./App.css";

import ApiClient from "./Services/ApiClient";

function App() {
  const page=1;
  const perPage="80";
  const dispatch = useDispatch();
  const handleClick = (filterBy) => (event) => {
    dispatch(filterBeers(filterBy));
  };
  useEffect(() => {
    ApiClient.getallBeers(page,perPage).then((res) => {
      dispatch(setAllBeers(res));
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="btn-group mt-5">
          <button class="btn btn-primary mr-5" onClick={handleClick()}>
            ALL
          </button>
          <button class="btn btn-primary mr-5" onClick={handleClick("abv")}>
            ABV
          </button>
          <button class="btn btn-primary" onClick={handleClick("ibu")}>
            IBU
          </button>
        </div>
        <BeerList />
      </div>
    </BrowserRouter>
  );
}

export default App;
