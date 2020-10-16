import React from "react";
import { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setAllBeers } from "./redux/beer/beerSlice";

import BeerList from "./Components/BeerList/BeerList";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";

import "./App.css";

import ApiClient from "./Services/ApiClient";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    ApiClient.getallBeers().then(res=> dispatch(setAllBeers(res)))
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
       <BeerList />
      </div>
    </BrowserRouter>
  );
}

export default App;
