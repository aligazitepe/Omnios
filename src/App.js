import React from "react";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import { setBeers } from "./redux/actions";
import { useDispatch } from "react-redux";
import VisibleBeerList from './redux/Containers/VisibleBeerList'
import "./App.css";

import ApiClient from "./Services/ApiClient";
import FilterLink from "./redux/Containers/FilterLink";

function App() {
  const dispatch=useDispatch()
  useEffect(() => {
    ApiClient.getallBeers().then((res) => {
      dispatch(setBeers(res));
    });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="">
          <FilterLink></FilterLink>
        </div>
        <div className="col-sm-10 offset-sm-1">
        <VisibleBeerList/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
