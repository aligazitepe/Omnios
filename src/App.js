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
  const [filterType, setFilterType] = useState("");
  const [filterAmount, setfilterAmount] = useState("0");
  const dispatch = useDispatch();
  const handleChange = (option) => (event) => {
    if (option === "type") {
      setFilterType(event.target.value);
    } else if (option === "amount") setfilterAmount(event.target.value);
  };
  const handleClick = (filterOptions) => (event) => {
    dispatch(filterBeers(filterOptions));
  };
  const handleCarousel = (event) => {
    event.preventDefault();
    window.scrollBy(100, 0);
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
          {/* TODO:Refactor input groups to reusable component */}
          <div className="row">
            <div class="input-group mb-3 mt-3 col-sm-6 input-group-custom">
              <select
                class="custom-select mt-2"
                id="inputGroupSelect01"
                onChange={handleChange("type")}
              >
                <option selected disabled>
                  Choose filter Type...
                </option>
                <option value="abv">ABV </option>
                <option value="ibu">IBU </option>
              </select>
              <h1 className="ml-2 mr-2">{">"}</h1>
              <select
                class="custom-select mt-2"
                id="inputGroupSelect02"
                onChange={handleChange("amount")}
              >
                <option selected disabled>
                  Choose Amount...
                </option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
                <option value="60">60</option>
                <option value="70">70</option>
                <option value="80">80</option>
              </select>
              <button
                class="btn btn-primary ml-3 mt-2 mb-2"
                onClick={handleClick({
                  filterBy: filterType,
                  filterAmount: filterAmount,
                })}
              >
                Filter
              </button>
            </div>
          </div>
          <div className="col-sm-12 mt-2 ">
            <button class="btn btn-primary " onClick={handleClick()}>
              Clear Filter
            </button>
          </div>
        </div>
        <div className="col-sm-12">

            <BeerList />
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
