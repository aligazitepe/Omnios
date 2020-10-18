import React from "react";
import { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAllBeers, filterBeers } from "./redux/beer/beerSlice";

import BeerList from "./Components/BeerList/BeerList";
import Navbar from "./Components/Navbar/Navbar";

import "./App.css";

import ApiClient from "./Services/ApiClient";

function App() {
  const dispatch = useDispatch();
  const handleClick = (filterBy) => (event) => {
    dispatch(filterBeers(filterBy));
  };
  useEffect(() => {
    ApiClient.getallBeers().then((res) => dispatch(setAllBeers(res)));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="btn-group mt-5">
          <btn class="btn btn-primary mr-5" onClick={handleClick()}>
            ALL
          </btn>
          <btn class="btn btn-primary mr-5" onClick={handleClick("abv")}>
            ABV
          </btn>
          <btn class="btn btn-primary" onClick={handleClick("ibu")}>
            IBU
          </btn>
        </div>
        <BeerList />
      </div>
    </BrowserRouter>
  );
}

export default App;
