import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectBeers } from "../../redux/beer/beerSlice";
import Spinner from "../Spinner";
import "./BeerList.css";

import BeerCard from "../BeerCard";
export default function Home(props) {
  const allBeers = useSelector(selectBeers);
  return (
    <div >
      {allBeers.shown.length ? (
        <div className="list_scroll">
          {allBeers.shown.map((beer) => (
            <BeerCard key={beer.id} beer={beer} />
          ))}
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
}
