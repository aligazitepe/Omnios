import React from "react";
import Spinner from "../Spinner";
import "./BeerList.css";

import BeerCard from "../BeerCard";
export default function BeerList({ allBeers, filterType, filterAmount }) {
  const byShown = (beer) => beer[filterType] > filterAmount;
  const useFiltered = filterType !== "" && filterAmount !== "";
  const beers = useFiltered ? allBeers.filter(byShown) : allBeers;
  return (
    <div>
      {allBeers.length ? (
        <div className="list_scroll">
          {beers.map((beer) => (
            <BeerCard key={beer.id} beer={beer} />
          ))}
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
}
