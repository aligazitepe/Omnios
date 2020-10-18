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
  const page = "1";
  const perPage = "80";
  const  [filterAmount,setFilterAmount] = useState("0")
  const dispatch = useDispatch();
  const handleChange = (event) => {
    console.log(event.target.value)
    setFilterAmount(event.target.value)
  };
  const handleClick = (filterBy) => (event) => {
    dispatch(filterBeers(filterBy));
  };
  useEffect(() => {
    ApiClient.getallBeers(page, perPage).then((res) => {
      dispatch(setAllBeers(res));
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="">
        {/* TODO:Refactor input groups to reusable component */}
          <div class="input-group mb-3 col-sm-6">
            <div class="input-group-prepend">
              <label class="input-group-text" for="inputGroupSelect01">
                ABV {'>'}
              </label>
            </div>
            <select
              class="custom-select"
              id="inputGroupSelect01"
              onChange={handleChange}
            >
              <option selected>Choose...</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
            </select>
            <button class="btn btn-primary" onClick={handleClick({filterBy:"abv",filterAmount: filterAmount})}>
              ABV
            </button>
          </div>
          <div class="input-group mb-3 col-sm-6">
            <div class="input-group-prepend">
              <label class="input-group-text" for="inputGroupSelect01">
                IBU {'>'}
              </label>
            </div>
            <select
              class="custom-select"
              id="inputGroupSelect01"
              onChange={handleChange}
            >
              <option selected>Choose...</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
            </select>
            <button class="btn btn-primary" onClick={handleClick({filterBy:"ibu",filterAmount: filterAmount})}>
              IBU
            </button>
          </div>
          <div className="row-sm-12 mt-2 ">
            <button class="btn btn-primary " onClick={handleClick()}>
              Clear Filters
            </button>
          </div>
        </div>
        <BeerList />
      </div>
    </BrowserRouter>
  );
}

export default App;
